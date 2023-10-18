/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 * vim: set ts=8 sts=2 et sw=2 tw=80:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef vm_Watchtower_h
#define vm_Watchtower_h

#include "js/Id.h"
#include "js/TypeDecls.h"
#include "vm/JSContext.h"
#include "vm/NativeObject.h"

namespace js {

// [SMDOC] Watchtower
//
// Watchtower is a framework to hook into changes to certain objects. This gives
// us the ability to, for instance, invalidate caches or purge Warp code on
// object layout changes.
//
// Watchtower is only used for objects with certain ObjectFlags set on the
// Shape. This minimizes performance overhead for most objects.
//
// We currently use Watchtower for:
//
// - Invalidating the shape teleporting optimization. See the "Shape Teleporting
//   Optimization" SMDOC comment in CacheIR.cpp.
//
// - Invalidating the MegamorphicCache, a property lookup cache for megamorphic
//   property accesses. See the SMDOC comment in vm/Caches.h.
//
// There's also a testing mechanism that lets us write tests for Watchtower
// hooks. See setWatchtowerCallback and addWatchtowerTarget defined in
// TestingFunctions.cpp.
class Watchtower {
  static bool watchPropertyAddSlow(JSContext* cx, HandleNativeObject obj,
                                   HandleId id);
  static bool watchPropertyRemoveSlow(JSContext* cx, HandleNativeObject obj,
                                      HandleId id);
  static bool watchPropertyChangeSlow(JSContext* cx, HandleNativeObject obj,
                                      HandleId id);
  static bool watchFreezeOrSealSlow(JSContext* cx, HandleNativeObject obj);
  static bool watchProtoChangeSlow(JSContext* cx, HandleObject obj);
  static bool watchObjectSwapSlow(JSContext* cx, HandleObject a,
                                  HandleObject b);

 public:
  static bool watchesPropertyAdd(NativeObject* obj) {
    return obj->hasAnyFlag({ObjectFlag::IsUsedAsPrototype,
                            ObjectFlag::UseWatchtowerTestingCallback});
  }
  static bool watchesPropertyRemove(NativeObject* obj) {
    return obj->hasAnyFlag({ObjectFlag::IsUsedAsPrototype,
                            ObjectFlag::UseWatchtowerTestingCallback});
  }
  static bool watchesPropertyChange(NativeObject* obj) {
    return obj->hasAnyFlag({ObjectFlag::IsUsedAsPrototype,
                            ObjectFlag::UseWatchtowerTestingCallback});
  }
  static bool watchesFreezeOrSeal(NativeObject* obj) {
    return obj->hasAnyFlag({ObjectFlag::UseWatchtowerTestingCallback});
  }
  static bool watchesProtoChange(JSObject* obj) {
    return obj->hasAnyFlag({ObjectFlag::IsUsedAsPrototype,
                            ObjectFlag::UseWatchtowerTestingCallback});
  }
  static bool watchesObjectSwap(JSObject* a, JSObject* b) {
    auto watches = [](JSObject* obj) {
      return obj->hasAnyFlag({ObjectFlag::IsUsedAsPrototype,
                              ObjectFlag::UseWatchtowerTestingCallback});
    };
    return watches(a) || watches(b);
  }

  static bool watchPropertyAdd(JSContext* cx, HandleNativeObject obj,
                               HandleId id) {
    if (MOZ_LIKELY(!watchesPropertyAdd(obj))) {
      return true;
    }
    return watchPropertyAddSlow(cx, obj, id);
  }
  static bool watchPropertyRemove(JSContext* cx, HandleNativeObject obj,
                                  HandleId id) {
    if (MOZ_LIKELY(!watchesPropertyRemove(obj))) {
      return true;
    }
    return watchPropertyRemoveSlow(cx, obj, id);
  }
  static bool watchPropertyChange(JSContext* cx, HandleNativeObject obj,
                                  HandleId id) {
    if (MOZ_LIKELY(!watchesPropertyChange(obj))) {
      return true;
    }
    return watchPropertyChangeSlow(cx, obj, id);
  }
  static bool watchFreezeOrSeal(JSContext* cx, HandleNativeObject obj) {
    if (MOZ_LIKELY(!watchesFreezeOrSeal(obj))) {
      return true;
    }
    return watchFreezeOrSealSlow(cx, obj);
  }
  static bool watchProtoChange(JSContext* cx, HandleObject obj) {
    if (MOZ_LIKELY(!watchesProtoChange(obj))) {
      return true;
    }
    return watchProtoChangeSlow(cx, obj);
  }
  static bool watchObjectSwap(JSContext* cx, HandleObject a, HandleObject b) {
    if (MOZ_LIKELY(!watchesObjectSwap(a, b))) {
      return true;
    }
    return watchObjectSwapSlow(cx, a, b);
  }
};

}  // namespace js

#endif /* vm_Watchtower_h */
