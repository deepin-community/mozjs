// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Alphabetic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000AA,
    0x0000B5,
    0x0000BA,
    0x0002EC,
    0x0002EE,
    0x000345,
    0x00037F,
    0x000386,
    0x00038C,
    0x000559,
    0x0005BF,
    0x0005C7,
    0x0006FF,
    0x0007FA,
    0x0009B2,
    0x0009CE,
    0x0009D7,
    0x0009FC,
    0x000A51,
    0x000A5E,
    0x000AD0,
    0x000B71,
    0x000B9C,
    0x000BD0,
    0x000BD7,
    0x000C5D,
    0x000D4E,
    0x000DBD,
    0x000DD6,
    0x000E4D,
    0x000E84,
    0x000EA5,
    0x000EC6,
    0x000ECD,
    0x000F00,
    0x001038,
    0x0010C7,
    0x0010CD,
    0x001258,
    0x0012C0,
    0x0017D7,
    0x0017DC,
    0x001AA7,
    0x001CFA,
    0x001F59,
    0x001F5B,
    0x001F5D,
    0x001FBE,
    0x002071,
    0x00207F,
    0x002102,
    0x002107,
    0x002115,
    0x002124,
    0x002126,
    0x002128,
    0x00214E,
    0x002D27,
    0x002D2D,
    0x002D6F,
    0x002E2F,
    0x00A7D3,
    0x00A8C5,
    0x00A8FB,
    0x00A9CF,
    0x00AAC0,
    0x00AAC2,
    0x00FB3E,
    0x010808,
    0x01083C,
    0x010F27,
    0x0110C2,
    0x011176,
    0x0111DA,
    0x0111DC,
    0x011237,
    0x01123E,
    0x011288,
    0x011350,
    0x011357,
    0x0114C7,
    0x011640,
    0x011644,
    0x0116B8,
    0x011909,
    0x0119E1,
    0x011A9D,
    0x011C40,
    0x011D3A,
    0x011D43,
    0x011D98,
    0x011FB0,
    0x016FE3,
    0x01BC9E,
    0x01D4A2,
    0x01D4BB,
    0x01D546,
    0x01E14E,
    0x01E947,
    0x01E94B,
    0x01EE24,
    0x01EE27,
    0x01EE39,
    0x01EE3B,
    0x01EE42,
    0x01EE47,
    0x01EE49,
    0x01EE4B,
    0x01EE54,
    0x01EE57,
    0x01EE59,
    0x01EE5B,
    0x01EE5D,
    0x01EE5F,
    0x01EE64,
    0x01EE7E
  ],
  ranges: [
    [0x000041, 0x00005A],
    [0x000061, 0x00007A],
    [0x0000C0, 0x0000D6],
    [0x0000D8, 0x0000F6],
    [0x0000F8, 0x0002C1],
    [0x0002C6, 0x0002D1],
    [0x0002E0, 0x0002E4],
    [0x000370, 0x000374],
    [0x000376, 0x000377],
    [0x00037A, 0x00037D],
    [0x000388, 0x00038A],
    [0x00038E, 0x0003A1],
    [0x0003A3, 0x0003F5],
    [0x0003F7, 0x000481],
    [0x00048A, 0x00052F],
    [0x000531, 0x000556],
    [0x000560, 0x000588],
    [0x0005B0, 0x0005BD],
    [0x0005C1, 0x0005C2],
    [0x0005C4, 0x0005C5],
    [0x0005D0, 0x0005EA],
    [0x0005EF, 0x0005F2],
    [0x000610, 0x00061A],
    [0x000620, 0x000657],
    [0x000659, 0x00065F],
    [0x00066E, 0x0006D3],
    [0x0006D5, 0x0006DC],
    [0x0006E1, 0x0006E8],
    [0x0006ED, 0x0006EF],
    [0x0006FA, 0x0006FC],
    [0x000710, 0x00073F],
    [0x00074D, 0x0007B1],
    [0x0007CA, 0x0007EA],
    [0x0007F4, 0x0007F5],
    [0x000800, 0x000817],
    [0x00081A, 0x00082C],
    [0x000840, 0x000858],
    [0x000860, 0x00086A],
    [0x000870, 0x000887],
    [0x000889, 0x00088E],
    [0x0008A0, 0x0008C9],
    [0x0008D4, 0x0008DF],
    [0x0008E3, 0x0008E9],
    [0x0008F0, 0x00093B],
    [0x00093D, 0x00094C],
    [0x00094E, 0x000950],
    [0x000955, 0x000963],
    [0x000971, 0x000983],
    [0x000985, 0x00098C],
    [0x00098F, 0x000990],
    [0x000993, 0x0009A8],
    [0x0009AA, 0x0009B0],
    [0x0009B6, 0x0009B9],
    [0x0009BD, 0x0009C4],
    [0x0009C7, 0x0009C8],
    [0x0009CB, 0x0009CC],
    [0x0009DC, 0x0009DD],
    [0x0009DF, 0x0009E3],
    [0x0009F0, 0x0009F1],
    [0x000A01, 0x000A03],
    [0x000A05, 0x000A0A],
    [0x000A0F, 0x000A10],
    [0x000A13, 0x000A28],
    [0x000A2A, 0x000A30],
    [0x000A32, 0x000A33],
    [0x000A35, 0x000A36],
    [0x000A38, 0x000A39],
    [0x000A3E, 0x000A42],
    [0x000A47, 0x000A48],
    [0x000A4B, 0x000A4C],
    [0x000A59, 0x000A5C],
    [0x000A70, 0x000A75],
    [0x000A81, 0x000A83],
    [0x000A85, 0x000A8D],
    [0x000A8F, 0x000A91],
    [0x000A93, 0x000AA8],
    [0x000AAA, 0x000AB0],
    [0x000AB2, 0x000AB3],
    [0x000AB5, 0x000AB9],
    [0x000ABD, 0x000AC5],
    [0x000AC7, 0x000AC9],
    [0x000ACB, 0x000ACC],
    [0x000AE0, 0x000AE3],
    [0x000AF9, 0x000AFC],
    [0x000B01, 0x000B03],
    [0x000B05, 0x000B0C],
    [0x000B0F, 0x000B10],
    [0x000B13, 0x000B28],
    [0x000B2A, 0x000B30],
    [0x000B32, 0x000B33],
    [0x000B35, 0x000B39],
    [0x000B3D, 0x000B44],
    [0x000B47, 0x000B48],
    [0x000B4B, 0x000B4C],
    [0x000B56, 0x000B57],
    [0x000B5C, 0x000B5D],
    [0x000B5F, 0x000B63],
    [0x000B82, 0x000B83],
    [0x000B85, 0x000B8A],
    [0x000B8E, 0x000B90],
    [0x000B92, 0x000B95],
    [0x000B99, 0x000B9A],
    [0x000B9E, 0x000B9F],
    [0x000BA3, 0x000BA4],
    [0x000BA8, 0x000BAA],
    [0x000BAE, 0x000BB9],
    [0x000BBE, 0x000BC2],
    [0x000BC6, 0x000BC8],
    [0x000BCA, 0x000BCC],
    [0x000C00, 0x000C03],
    [0x000C05, 0x000C0C],
    [0x000C0E, 0x000C10],
    [0x000C12, 0x000C28],
    [0x000C2A, 0x000C39],
    [0x000C3D, 0x000C44],
    [0x000C46, 0x000C48],
    [0x000C4A, 0x000C4C],
    [0x000C55, 0x000C56],
    [0x000C58, 0x000C5A],
    [0x000C60, 0x000C63],
    [0x000C80, 0x000C83],
    [0x000C85, 0x000C8C],
    [0x000C8E, 0x000C90],
    [0x000C92, 0x000CA8],
    [0x000CAA, 0x000CB3],
    [0x000CB5, 0x000CB9],
    [0x000CBD, 0x000CC4],
    [0x000CC6, 0x000CC8],
    [0x000CCA, 0x000CCC],
    [0x000CD5, 0x000CD6],
    [0x000CDD, 0x000CDE],
    [0x000CE0, 0x000CE3],
    [0x000CF1, 0x000CF2],
    [0x000D00, 0x000D0C],
    [0x000D0E, 0x000D10],
    [0x000D12, 0x000D3A],
    [0x000D3D, 0x000D44],
    [0x000D46, 0x000D48],
    [0x000D4A, 0x000D4C],
    [0x000D54, 0x000D57],
    [0x000D5F, 0x000D63],
    [0x000D7A, 0x000D7F],
    [0x000D81, 0x000D83],
    [0x000D85, 0x000D96],
    [0x000D9A, 0x000DB1],
    [0x000DB3, 0x000DBB],
    [0x000DC0, 0x000DC6],
    [0x000DCF, 0x000DD4],
    [0x000DD8, 0x000DDF],
    [0x000DF2, 0x000DF3],
    [0x000E01, 0x000E3A],
    [0x000E40, 0x000E46],
    [0x000E81, 0x000E82],
    [0x000E86, 0x000E8A],
    [0x000E8C, 0x000EA3],
    [0x000EA7, 0x000EB9],
    [0x000EBB, 0x000EBD],
    [0x000EC0, 0x000EC4],
    [0x000EDC, 0x000EDF],
    [0x000F40, 0x000F47],
    [0x000F49, 0x000F6C],
    [0x000F71, 0x000F81],
    [0x000F88, 0x000F97],
    [0x000F99, 0x000FBC],
    [0x001000, 0x001036],
    [0x00103B, 0x00103F],
    [0x001050, 0x00108F],
    [0x00109A, 0x00109D],
    [0x0010A0, 0x0010C5],
    [0x0010D0, 0x0010FA],
    [0x0010FC, 0x001248],
    [0x00124A, 0x00124D],
    [0x001250, 0x001256],
    [0x00125A, 0x00125D],
    [0x001260, 0x001288],
    [0x00128A, 0x00128D],
    [0x001290, 0x0012B0],
    [0x0012B2, 0x0012B5],
    [0x0012B8, 0x0012BE],
    [0x0012C2, 0x0012C5],
    [0x0012C8, 0x0012D6],
    [0x0012D8, 0x001310],
    [0x001312, 0x001315],
    [0x001318, 0x00135A],
    [0x001380, 0x00138F],
    [0x0013A0, 0x0013F5],
    [0x0013F8, 0x0013FD],
    [0x001401, 0x00166C],
    [0x00166F, 0x00167F],
    [0x001681, 0x00169A],
    [0x0016A0, 0x0016EA],
    [0x0016EE, 0x0016F8],
    [0x001700, 0x001713],
    [0x00171F, 0x001733],
    [0x001740, 0x001753],
    [0x001760, 0x00176C],
    [0x00176E, 0x001770],
    [0x001772, 0x001773],
    [0x001780, 0x0017B3],
    [0x0017B6, 0x0017C8],
    [0x001820, 0x001878],
    [0x001880, 0x0018AA],
    [0x0018B0, 0x0018F5],
    [0x001900, 0x00191E],
    [0x001920, 0x00192B],
    [0x001930, 0x001938],
    [0x001950, 0x00196D],
    [0x001970, 0x001974],
    [0x001980, 0x0019AB],
    [0x0019B0, 0x0019C9],
    [0x001A00, 0x001A1B],
    [0x001A20, 0x001A5E],
    [0x001A61, 0x001A74],
    [0x001ABF, 0x001AC0],
    [0x001ACC, 0x001ACE],
    [0x001B00, 0x001B33],
    [0x001B35, 0x001B43],
    [0x001B45, 0x001B4C],
    [0x001B80, 0x001BA9],
    [0x001BAC, 0x001BAF],
    [0x001BBA, 0x001BE5],
    [0x001BE7, 0x001BF1],
    [0x001C00, 0x001C36],
    [0x001C4D, 0x001C4F],
    [0x001C5A, 0x001C7D],
    [0x001C80, 0x001C88],
    [0x001C90, 0x001CBA],
    [0x001CBD, 0x001CBF],
    [0x001CE9, 0x001CEC],
    [0x001CEE, 0x001CF3],
    [0x001CF5, 0x001CF6],
    [0x001D00, 0x001DBF],
    [0x001DE7, 0x001DF4],
    [0x001E00, 0x001F15],
    [0x001F18, 0x001F1D],
    [0x001F20, 0x001F45],
    [0x001F48, 0x001F4D],
    [0x001F50, 0x001F57],
    [0x001F5F, 0x001F7D],
    [0x001F80, 0x001FB4],
    [0x001FB6, 0x001FBC],
    [0x001FC2, 0x001FC4],
    [0x001FC6, 0x001FCC],
    [0x001FD0, 0x001FD3],
    [0x001FD6, 0x001FDB],
    [0x001FE0, 0x001FEC],
    [0x001FF2, 0x001FF4],
    [0x001FF6, 0x001FFC],
    [0x002090, 0x00209C],
    [0x00210A, 0x002113],
    [0x002119, 0x00211D],
    [0x00212A, 0x00212D],
    [0x00212F, 0x002139],
    [0x00213C, 0x00213F],
    [0x002145, 0x002149],
    [0x002160, 0x002188],
    [0x0024B6, 0x0024E9],
    [0x002C00, 0x002CE4],
    [0x002CEB, 0x002CEE],
    [0x002CF2, 0x002CF3],
    [0x002D00, 0x002D25],
    [0x002D30, 0x002D67],
    [0x002D80, 0x002D96],
    [0x002DA0, 0x002DA6],
    [0x002DA8, 0x002DAE],
    [0x002DB0, 0x002DB6],
    [0x002DB8, 0x002DBE],
    [0x002DC0, 0x002DC6],
    [0x002DC8, 0x002DCE],
    [0x002DD0, 0x002DD6],
    [0x002DD8, 0x002DDE],
    [0x002DE0, 0x002DFF],
    [0x003005, 0x003007],
    [0x003021, 0x003029],
    [0x003031, 0x003035],
    [0x003038, 0x00303C],
    [0x003041, 0x003096],
    [0x00309D, 0x00309F],
    [0x0030A1, 0x0030FA],
    [0x0030FC, 0x0030FF],
    [0x003105, 0x00312F],
    [0x003131, 0x00318E],
    [0x0031A0, 0x0031BF],
    [0x0031F0, 0x0031FF],
    [0x003400, 0x004DBF],
    [0x004E00, 0x00A48C],
    [0x00A4D0, 0x00A4FD],
    [0x00A500, 0x00A60C],
    [0x00A610, 0x00A61F],
    [0x00A62A, 0x00A62B],
    [0x00A640, 0x00A66E],
    [0x00A674, 0x00A67B],
    [0x00A67F, 0x00A6EF],
    [0x00A717, 0x00A71F],
    [0x00A722, 0x00A788],
    [0x00A78B, 0x00A7CA],
    [0x00A7D0, 0x00A7D1],
    [0x00A7D5, 0x00A7D9],
    [0x00A7F2, 0x00A805],
    [0x00A807, 0x00A827],
    [0x00A840, 0x00A873],
    [0x00A880, 0x00A8C3],
    [0x00A8F2, 0x00A8F7],
    [0x00A8FD, 0x00A8FF],
    [0x00A90A, 0x00A92A],
    [0x00A930, 0x00A952],
    [0x00A960, 0x00A97C],
    [0x00A980, 0x00A9B2],
    [0x00A9B4, 0x00A9BF],
    [0x00A9E0, 0x00A9EF],
    [0x00A9FA, 0x00A9FE],
    [0x00AA00, 0x00AA36],
    [0x00AA40, 0x00AA4D],
    [0x00AA60, 0x00AA76],
    [0x00AA7A, 0x00AABE],
    [0x00AADB, 0x00AADD],
    [0x00AAE0, 0x00AAEF],
    [0x00AAF2, 0x00AAF5],
    [0x00AB01, 0x00AB06],
    [0x00AB09, 0x00AB0E],
    [0x00AB11, 0x00AB16],
    [0x00AB20, 0x00AB26],
    [0x00AB28, 0x00AB2E],
    [0x00AB30, 0x00AB5A],
    [0x00AB5C, 0x00AB69],
    [0x00AB70, 0x00ABEA],
    [0x00AC00, 0x00D7A3],
    [0x00D7B0, 0x00D7C6],
    [0x00D7CB, 0x00D7FB],
    [0x00F900, 0x00FA6D],
    [0x00FA70, 0x00FAD9],
    [0x00FB00, 0x00FB06],
    [0x00FB13, 0x00FB17],
    [0x00FB1D, 0x00FB28],
    [0x00FB2A, 0x00FB36],
    [0x00FB38, 0x00FB3C],
    [0x00FB40, 0x00FB41],
    [0x00FB43, 0x00FB44],
    [0x00FB46, 0x00FBB1],
    [0x00FBD3, 0x00FD3D],
    [0x00FD50, 0x00FD8F],
    [0x00FD92, 0x00FDC7],
    [0x00FDF0, 0x00FDFB],
    [0x00FE70, 0x00FE74],
    [0x00FE76, 0x00FEFC],
    [0x00FF21, 0x00FF3A],
    [0x00FF41, 0x00FF5A],
    [0x00FF66, 0x00FFBE],
    [0x00FFC2, 0x00FFC7],
    [0x00FFCA, 0x00FFCF],
    [0x00FFD2, 0x00FFD7],
    [0x00FFDA, 0x00FFDC],
    [0x010000, 0x01000B],
    [0x01000D, 0x010026],
    [0x010028, 0x01003A],
    [0x01003C, 0x01003D],
    [0x01003F, 0x01004D],
    [0x010050, 0x01005D],
    [0x010080, 0x0100FA],
    [0x010140, 0x010174],
    [0x010280, 0x01029C],
    [0x0102A0, 0x0102D0],
    [0x010300, 0x01031F],
    [0x01032D, 0x01034A],
    [0x010350, 0x01037A],
    [0x010380, 0x01039D],
    [0x0103A0, 0x0103C3],
    [0x0103C8, 0x0103CF],
    [0x0103D1, 0x0103D5],
    [0x010400, 0x01049D],
    [0x0104B0, 0x0104D3],
    [0x0104D8, 0x0104FB],
    [0x010500, 0x010527],
    [0x010530, 0x010563],
    [0x010570, 0x01057A],
    [0x01057C, 0x01058A],
    [0x01058C, 0x010592],
    [0x010594, 0x010595],
    [0x010597, 0x0105A1],
    [0x0105A3, 0x0105B1],
    [0x0105B3, 0x0105B9],
    [0x0105BB, 0x0105BC],
    [0x010600, 0x010736],
    [0x010740, 0x010755],
    [0x010760, 0x010767],
    [0x010780, 0x010785],
    [0x010787, 0x0107B0],
    [0x0107B2, 0x0107BA],
    [0x010800, 0x010805],
    [0x01080A, 0x010835],
    [0x010837, 0x010838],
    [0x01083F, 0x010855],
    [0x010860, 0x010876],
    [0x010880, 0x01089E],
    [0x0108E0, 0x0108F2],
    [0x0108F4, 0x0108F5],
    [0x010900, 0x010915],
    [0x010920, 0x010939],
    [0x010980, 0x0109B7],
    [0x0109BE, 0x0109BF],
    [0x010A00, 0x010A03],
    [0x010A05, 0x010A06],
    [0x010A0C, 0x010A13],
    [0x010A15, 0x010A17],
    [0x010A19, 0x010A35],
    [0x010A60, 0x010A7C],
    [0x010A80, 0x010A9C],
    [0x010AC0, 0x010AC7],
    [0x010AC9, 0x010AE4],
    [0x010B00, 0x010B35],
    [0x010B40, 0x010B55],
    [0x010B60, 0x010B72],
    [0x010B80, 0x010B91],
    [0x010C00, 0x010C48],
    [0x010C80, 0x010CB2],
    [0x010CC0, 0x010CF2],
    [0x010D00, 0x010D27],
    [0x010E80, 0x010EA9],
    [0x010EAB, 0x010EAC],
    [0x010EB0, 0x010EB1],
    [0x010F00, 0x010F1C],
    [0x010F30, 0x010F45],
    [0x010F70, 0x010F81],
    [0x010FB0, 0x010FC4],
    [0x010FE0, 0x010FF6],
    [0x011000, 0x011045],
    [0x011071, 0x011075],
    [0x011082, 0x0110B8],
    [0x0110D0, 0x0110E8],
    [0x011100, 0x011132],
    [0x011144, 0x011147],
    [0x011150, 0x011172],
    [0x011180, 0x0111BF],
    [0x0111C1, 0x0111C4],
    [0x0111CE, 0x0111CF],
    [0x011200, 0x011211],
    [0x011213, 0x011234],
    [0x011280, 0x011286],
    [0x01128A, 0x01128D],
    [0x01128F, 0x01129D],
    [0x01129F, 0x0112A8],
    [0x0112B0, 0x0112E8],
    [0x011300, 0x011303],
    [0x011305, 0x01130C],
    [0x01130F, 0x011310],
    [0x011313, 0x011328],
    [0x01132A, 0x011330],
    [0x011332, 0x011333],
    [0x011335, 0x011339],
    [0x01133D, 0x011344],
    [0x011347, 0x011348],
    [0x01134B, 0x01134C],
    [0x01135D, 0x011363],
    [0x011400, 0x011441],
    [0x011443, 0x011445],
    [0x011447, 0x01144A],
    [0x01145F, 0x011461],
    [0x011480, 0x0114C1],
    [0x0114C4, 0x0114C5],
    [0x011580, 0x0115B5],
    [0x0115B8, 0x0115BE],
    [0x0115D8, 0x0115DD],
    [0x011600, 0x01163E],
    [0x011680, 0x0116B5],
    [0x011700, 0x01171A],
    [0x01171D, 0x01172A],
    [0x011740, 0x011746],
    [0x011800, 0x011838],
    [0x0118A0, 0x0118DF],
    [0x0118FF, 0x011906],
    [0x01190C, 0x011913],
    [0x011915, 0x011916],
    [0x011918, 0x011935],
    [0x011937, 0x011938],
    [0x01193B, 0x01193C],
    [0x01193F, 0x011942],
    [0x0119A0, 0x0119A7],
    [0x0119AA, 0x0119D7],
    [0x0119DA, 0x0119DF],
    [0x0119E3, 0x0119E4],
    [0x011A00, 0x011A32],
    [0x011A35, 0x011A3E],
    [0x011A50, 0x011A97],
    [0x011AB0, 0x011AF8],
    [0x011C00, 0x011C08],
    [0x011C0A, 0x011C36],
    [0x011C38, 0x011C3E],
    [0x011C72, 0x011C8F],
    [0x011C92, 0x011CA7],
    [0x011CA9, 0x011CB6],
    [0x011D00, 0x011D06],
    [0x011D08, 0x011D09],
    [0x011D0B, 0x011D36],
    [0x011D3C, 0x011D3D],
    [0x011D3F, 0x011D41],
    [0x011D46, 0x011D47],
    [0x011D60, 0x011D65],
    [0x011D67, 0x011D68],
    [0x011D6A, 0x011D8E],
    [0x011D90, 0x011D91],
    [0x011D93, 0x011D96],
    [0x011EE0, 0x011EF6],
    [0x012000, 0x012399],
    [0x012400, 0x01246E],
    [0x012480, 0x012543],
    [0x012F90, 0x012FF0],
    [0x013000, 0x01342E],
    [0x014400, 0x014646],
    [0x016800, 0x016A38],
    [0x016A40, 0x016A5E],
    [0x016A70, 0x016ABE],
    [0x016AD0, 0x016AED],
    [0x016B00, 0x016B2F],
    [0x016B40, 0x016B43],
    [0x016B63, 0x016B77],
    [0x016B7D, 0x016B8F],
    [0x016E40, 0x016E7F],
    [0x016F00, 0x016F4A],
    [0x016F4F, 0x016F87],
    [0x016F8F, 0x016F9F],
    [0x016FE0, 0x016FE1],
    [0x016FF0, 0x016FF1],
    [0x017000, 0x0187F7],
    [0x018800, 0x018CD5],
    [0x018D00, 0x018D08],
    [0x01AFF0, 0x01AFF3],
    [0x01AFF5, 0x01AFFB],
    [0x01AFFD, 0x01AFFE],
    [0x01B000, 0x01B122],
    [0x01B150, 0x01B152],
    [0x01B164, 0x01B167],
    [0x01B170, 0x01B2FB],
    [0x01BC00, 0x01BC6A],
    [0x01BC70, 0x01BC7C],
    [0x01BC80, 0x01BC88],
    [0x01BC90, 0x01BC99],
    [0x01D400, 0x01D454],
    [0x01D456, 0x01D49C],
    [0x01D49E, 0x01D49F],
    [0x01D4A5, 0x01D4A6],
    [0x01D4A9, 0x01D4AC],
    [0x01D4AE, 0x01D4B9],
    [0x01D4BD, 0x01D4C3],
    [0x01D4C5, 0x01D505],
    [0x01D507, 0x01D50A],
    [0x01D50D, 0x01D514],
    [0x01D516, 0x01D51C],
    [0x01D51E, 0x01D539],
    [0x01D53B, 0x01D53E],
    [0x01D540, 0x01D544],
    [0x01D54A, 0x01D550],
    [0x01D552, 0x01D6A5],
    [0x01D6A8, 0x01D6C0],
    [0x01D6C2, 0x01D6DA],
    [0x01D6DC, 0x01D6FA],
    [0x01D6FC, 0x01D714],
    [0x01D716, 0x01D734],
    [0x01D736, 0x01D74E],
    [0x01D750, 0x01D76E],
    [0x01D770, 0x01D788],
    [0x01D78A, 0x01D7A8],
    [0x01D7AA, 0x01D7C2],
    [0x01D7C4, 0x01D7CB],
    [0x01DF00, 0x01DF1E],
    [0x01E000, 0x01E006],
    [0x01E008, 0x01E018],
    [0x01E01B, 0x01E021],
    [0x01E023, 0x01E024],
    [0x01E026, 0x01E02A],
    [0x01E100, 0x01E12C],
    [0x01E137, 0x01E13D],
    [0x01E290, 0x01E2AD],
    [0x01E2C0, 0x01E2EB],
    [0x01E7E0, 0x01E7E6],
    [0x01E7E8, 0x01E7EB],
    [0x01E7ED, 0x01E7EE],
    [0x01E7F0, 0x01E7FE],
    [0x01E800, 0x01E8C4],
    [0x01E900, 0x01E943],
    [0x01EE00, 0x01EE03],
    [0x01EE05, 0x01EE1F],
    [0x01EE21, 0x01EE22],
    [0x01EE29, 0x01EE32],
    [0x01EE34, 0x01EE37],
    [0x01EE4D, 0x01EE4F],
    [0x01EE51, 0x01EE52],
    [0x01EE61, 0x01EE62],
    [0x01EE67, 0x01EE6A],
    [0x01EE6C, 0x01EE72],
    [0x01EE74, 0x01EE77],
    [0x01EE79, 0x01EE7C],
    [0x01EE80, 0x01EE89],
    [0x01EE8B, 0x01EE9B],
    [0x01EEA1, 0x01EEA3],
    [0x01EEA5, 0x01EEA9],
    [0x01EEAB, 0x01EEBB],
    [0x01F130, 0x01F149],
    [0x01F150, 0x01F169],
    [0x01F170, 0x01F189],
    [0x020000, 0x02A6DF],
    [0x02A700, 0x02B738],
    [0x02B740, 0x02B81D],
    [0x02B820, 0x02CEA1],
    [0x02CEB0, 0x02EBE0],
    [0x02F800, 0x02FA1D],
    [0x030000, 0x03134A]
  ]
});
testPropertyEscapes(
  /^\p{Alphabetic}+$/u,
  matchSymbols,
  "\\p{Alphabetic}"
);
testPropertyEscapes(
  /^\p{Alpha}+$/u,
  matchSymbols,
  "\\p{Alpha}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0000D7,
    0x0000F7,
    0x0002ED,
    0x000375,
    0x00037E,
    0x000387,
    0x00038B,
    0x00038D,
    0x0003A2,
    0x0003F6,
    0x000530,
    0x0005BE,
    0x0005C0,
    0x0005C3,
    0x0005C6,
    0x000658,
    0x0006D4,
    0x000888,
    0x00093C,
    0x00094D,
    0x000984,
    0x0009A9,
    0x0009B1,
    0x0009CD,
    0x0009DE,
    0x000A04,
    0x000A29,
    0x000A31,
    0x000A34,
    0x000A37,
    0x000A5D,
    0x000A84,
    0x000A8E,
    0x000A92,
    0x000AA9,
    0x000AB1,
    0x000AB4,
    0x000AC6,
    0x000ACA,
    0x000B04,
    0x000B29,
    0x000B31,
    0x000B34,
    0x000B5E,
    0x000B84,
    0x000B91,
    0x000B9B,
    0x000B9D,
    0x000BC9,
    0x000C04,
    0x000C0D,
    0x000C11,
    0x000C29,
    0x000C45,
    0x000C49,
    0x000C57,
    0x000C84,
    0x000C8D,
    0x000C91,
    0x000CA9,
    0x000CB4,
    0x000CC5,
    0x000CC9,
    0x000CDF,
    0x000D0D,
    0x000D11,
    0x000D45,
    0x000D49,
    0x000D4D,
    0x000D80,
    0x000D84,
    0x000DB2,
    0x000DBC,
    0x000DD5,
    0x000DD7,
    0x000E83,
    0x000E85,
    0x000E8B,
    0x000EA4,
    0x000EA6,
    0x000EBA,
    0x000EC5,
    0x000F48,
    0x000F98,
    0x001037,
    0x0010C6,
    0x0010FB,
    0x001249,
    0x001257,
    0x001259,
    0x001289,
    0x0012B1,
    0x0012BF,
    0x0012C1,
    0x0012D7,
    0x001311,
    0x001680,
    0x00176D,
    0x001771,
    0x00191F,
    0x001B34,
    0x001B44,
    0x001BE6,
    0x001CED,
    0x001CF4,
    0x001F58,
    0x001F5A,
    0x001F5C,
    0x001F5E,
    0x001FB5,
    0x001FBD,
    0x001FC5,
    0x001FF5,
    0x002114,
    0x002125,
    0x002127,
    0x002129,
    0x00212E,
    0x002D26,
    0x002DA7,
    0x002DAF,
    0x002DB7,
    0x002DBF,
    0x002DC7,
    0x002DCF,
    0x002DD7,
    0x002DDF,
    0x0030A0,
    0x0030FB,
    0x003130,
    0x00A7D2,
    0x00A7D4,
    0x00A806,
    0x00A8C4,
    0x00A8FC,
    0x00A9B3,
    0x00A9FF,
    0x00AABF,
    0x00AAC1,
    0x00AB27,
    0x00AB2F,
    0x00AB5B,
    0x00FB29,
    0x00FB37,
    0x00FB3D,
    0x00FB3F,
    0x00FB42,
    0x00FB45,
    0x00FE75,
    0x01000C,
    0x010027,
    0x01003B,
    0x01003E,
    0x0103D0,
    0x01057B,
    0x01058B,
    0x010593,
    0x010596,
    0x0105A2,
    0x0105B2,
    0x0105BA,
    0x010786,
    0x0107B1,
    0x010809,
    0x010836,
    0x0108F3,
    0x010A04,
    0x010A14,
    0x010A18,
    0x010AC8,
    0x010EAA,
    0x0111C0,
    0x0111DB,
    0x011212,
    0x011287,
    0x011289,
    0x01128E,
    0x01129E,
    0x011304,
    0x011329,
    0x011331,
    0x011334,
    0x011442,
    0x011446,
    0x0114C6,
    0x01163F,
    0x011914,
    0x011917,
    0x011936,
    0x0119E0,
    0x0119E2,
    0x011C09,
    0x011C37,
    0x011C3F,
    0x011CA8,
    0x011D07,
    0x011D0A,
    0x011D3B,
    0x011D3E,
    0x011D42,
    0x011D66,
    0x011D69,
    0x011D8F,
    0x011D92,
    0x011D97,
    0x016FE2,
    0x01AFF4,
    0x01AFFC,
    0x01AFFF,
    0x01D455,
    0x01D49D,
    0x01D4AD,
    0x01D4BA,
    0x01D4BC,
    0x01D4C4,
    0x01D506,
    0x01D515,
    0x01D51D,
    0x01D53A,
    0x01D53F,
    0x01D545,
    0x01D551,
    0x01D6C1,
    0x01D6DB,
    0x01D6FB,
    0x01D715,
    0x01D735,
    0x01D74F,
    0x01D76F,
    0x01D789,
    0x01D7A9,
    0x01D7C3,
    0x01E007,
    0x01E022,
    0x01E025,
    0x01E7E7,
    0x01E7EC,
    0x01E7EF,
    0x01E7FF,
    0x01EE04,
    0x01EE20,
    0x01EE23,
    0x01EE28,
    0x01EE33,
    0x01EE38,
    0x01EE3A,
    0x01EE48,
    0x01EE4A,
    0x01EE4C,
    0x01EE50,
    0x01EE53,
    0x01EE58,
    0x01EE5A,
    0x01EE5C,
    0x01EE5E,
    0x01EE60,
    0x01EE63,
    0x01EE6B,
    0x01EE73,
    0x01EE78,
    0x01EE7D,
    0x01EE7F,
    0x01EE8A,
    0x01EEA4,
    0x01EEAA
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000040],
    [0x00005B, 0x000060],
    [0x00007B, 0x0000A9],
    [0x0000AB, 0x0000B4],
    [0x0000B6, 0x0000B9],
    [0x0000BB, 0x0000BF],
    [0x0002C2, 0x0002C5],
    [0x0002D2, 0x0002DF],
    [0x0002E5, 0x0002EB],
    [0x0002EF, 0x000344],
    [0x000346, 0x00036F],
    [0x000378, 0x000379],
    [0x000380, 0x000385],
    [0x000482, 0x000489],
    [0x000557, 0x000558],
    [0x00055A, 0x00055F],
    [0x000589, 0x0005AF],
    [0x0005C8, 0x0005CF],
    [0x0005EB, 0x0005EE],
    [0x0005F3, 0x00060F],
    [0x00061B, 0x00061F],
    [0x000660, 0x00066D],
    [0x0006DD, 0x0006E0],
    [0x0006E9, 0x0006EC],
    [0x0006F0, 0x0006F9],
    [0x0006FD, 0x0006FE],
    [0x000700, 0x00070F],
    [0x000740, 0x00074C],
    [0x0007B2, 0x0007C9],
    [0x0007EB, 0x0007F3],
    [0x0007F6, 0x0007F9],
    [0x0007FB, 0x0007FF],
    [0x000818, 0x000819],
    [0x00082D, 0x00083F],
    [0x000859, 0x00085F],
    [0x00086B, 0x00086F],
    [0x00088F, 0x00089F],
    [0x0008CA, 0x0008D3],
    [0x0008E0, 0x0008E2],
    [0x0008EA, 0x0008EF],
    [0x000951, 0x000954],
    [0x000964, 0x000970],
    [0x00098D, 0x00098E],
    [0x000991, 0x000992],
    [0x0009B3, 0x0009B5],
    [0x0009BA, 0x0009BC],
    [0x0009C5, 0x0009C6],
    [0x0009C9, 0x0009CA],
    [0x0009CF, 0x0009D6],
    [0x0009D8, 0x0009DB],
    [0x0009E4, 0x0009EF],
    [0x0009F2, 0x0009FB],
    [0x0009FD, 0x000A00],
    [0x000A0B, 0x000A0E],
    [0x000A11, 0x000A12],
    [0x000A3A, 0x000A3D],
    [0x000A43, 0x000A46],
    [0x000A49, 0x000A4A],
    [0x000A4D, 0x000A50],
    [0x000A52, 0x000A58],
    [0x000A5F, 0x000A6F],
    [0x000A76, 0x000A80],
    [0x000ABA, 0x000ABC],
    [0x000ACD, 0x000ACF],
    [0x000AD1, 0x000ADF],
    [0x000AE4, 0x000AF8],
    [0x000AFD, 0x000B00],
    [0x000B0D, 0x000B0E],
    [0x000B11, 0x000B12],
    [0x000B3A, 0x000B3C],
    [0x000B45, 0x000B46],
    [0x000B49, 0x000B4A],
    [0x000B4D, 0x000B55],
    [0x000B58, 0x000B5B],
    [0x000B64, 0x000B70],
    [0x000B72, 0x000B81],
    [0x000B8B, 0x000B8D],
    [0x000B96, 0x000B98],
    [0x000BA0, 0x000BA2],
    [0x000BA5, 0x000BA7],
    [0x000BAB, 0x000BAD],
    [0x000BBA, 0x000BBD],
    [0x000BC3, 0x000BC5],
    [0x000BCD, 0x000BCF],
    [0x000BD1, 0x000BD6],
    [0x000BD8, 0x000BFF],
    [0x000C3A, 0x000C3C],
    [0x000C4D, 0x000C54],
    [0x000C5B, 0x000C5C],
    [0x000C5E, 0x000C5F],
    [0x000C64, 0x000C7F],
    [0x000CBA, 0x000CBC],
    [0x000CCD, 0x000CD4],
    [0x000CD7, 0x000CDC],
    [0x000CE4, 0x000CF0],
    [0x000CF3, 0x000CFF],
    [0x000D3B, 0x000D3C],
    [0x000D4F, 0x000D53],
    [0x000D58, 0x000D5E],
    [0x000D64, 0x000D79],
    [0x000D97, 0x000D99],
    [0x000DBE, 0x000DBF],
    [0x000DC7, 0x000DCE],
    [0x000DE0, 0x000DF1],
    [0x000DF4, 0x000E00],
    [0x000E3B, 0x000E3F],
    [0x000E47, 0x000E4C],
    [0x000E4E, 0x000E80],
    [0x000EBE, 0x000EBF],
    [0x000EC7, 0x000ECC],
    [0x000ECE, 0x000EDB],
    [0x000EE0, 0x000EFF],
    [0x000F01, 0x000F3F],
    [0x000F6D, 0x000F70],
    [0x000F82, 0x000F87],
    [0x000FBD, 0x000FFF],
    [0x001039, 0x00103A],
    [0x001040, 0x00104F],
    [0x001090, 0x001099],
    [0x00109E, 0x00109F],
    [0x0010C8, 0x0010CC],
    [0x0010CE, 0x0010CF],
    [0x00124E, 0x00124F],
    [0x00125E, 0x00125F],
    [0x00128E, 0x00128F],
    [0x0012B6, 0x0012B7],
    [0x0012C6, 0x0012C7],
    [0x001316, 0x001317],
    [0x00135B, 0x00137F],
    [0x001390, 0x00139F],
    [0x0013F6, 0x0013F7],
    [0x0013FE, 0x001400],
    [0x00166D, 0x00166E],
    [0x00169B, 0x00169F],
    [0x0016EB, 0x0016ED],
    [0x0016F9, 0x0016FF],
    [0x001714, 0x00171E],
    [0x001734, 0x00173F],
    [0x001754, 0x00175F],
    [0x001774, 0x00177F],
    [0x0017B4, 0x0017B5],
    [0x0017C9, 0x0017D6],
    [0x0017D8, 0x0017DB],
    [0x0017DD, 0x00181F],
    [0x001879, 0x00187F],
    [0x0018AB, 0x0018AF],
    [0x0018F6, 0x0018FF],
    [0x00192C, 0x00192F],
    [0x001939, 0x00194F],
    [0x00196E, 0x00196F],
    [0x001975, 0x00197F],
    [0x0019AC, 0x0019AF],
    [0x0019CA, 0x0019FF],
    [0x001A1C, 0x001A1F],
    [0x001A5F, 0x001A60],
    [0x001A75, 0x001AA6],
    [0x001AA8, 0x001ABE],
    [0x001AC1, 0x001ACB],
    [0x001ACF, 0x001AFF],
    [0x001B4D, 0x001B7F],
    [0x001BAA, 0x001BAB],
    [0x001BB0, 0x001BB9],
    [0x001BF2, 0x001BFF],
    [0x001C37, 0x001C4C],
    [0x001C50, 0x001C59],
    [0x001C7E, 0x001C7F],
    [0x001C89, 0x001C8F],
    [0x001CBB, 0x001CBC],
    [0x001CC0, 0x001CE8],
    [0x001CF7, 0x001CF9],
    [0x001CFB, 0x001CFF],
    [0x001DC0, 0x001DE6],
    [0x001DF5, 0x001DFF],
    [0x001F16, 0x001F17],
    [0x001F1E, 0x001F1F],
    [0x001F46, 0x001F47],
    [0x001F4E, 0x001F4F],
    [0x001F7E, 0x001F7F],
    [0x001FBF, 0x001FC1],
    [0x001FCD, 0x001FCF],
    [0x001FD4, 0x001FD5],
    [0x001FDC, 0x001FDF],
    [0x001FED, 0x001FF1],
    [0x001FFD, 0x002070],
    [0x002072, 0x00207E],
    [0x002080, 0x00208F],
    [0x00209D, 0x002101],
    [0x002103, 0x002106],
    [0x002108, 0x002109],
    [0x002116, 0x002118],
    [0x00211E, 0x002123],
    [0x00213A, 0x00213B],
    [0x002140, 0x002144],
    [0x00214A, 0x00214D],
    [0x00214F, 0x00215F],
    [0x002189, 0x0024B5],
    [0x0024EA, 0x002BFF],
    [0x002CE5, 0x002CEA],
    [0x002CEF, 0x002CF1],
    [0x002CF4, 0x002CFF],
    [0x002D28, 0x002D2C],
    [0x002D2E, 0x002D2F],
    [0x002D68, 0x002D6E],
    [0x002D70, 0x002D7F],
    [0x002D97, 0x002D9F],
    [0x002E00, 0x002E2E],
    [0x002E30, 0x003004],
    [0x003008, 0x003020],
    [0x00302A, 0x003030],
    [0x003036, 0x003037],
    [0x00303D, 0x003040],
    [0x003097, 0x00309C],
    [0x003100, 0x003104],
    [0x00318F, 0x00319F],
    [0x0031C0, 0x0031EF],
    [0x003200, 0x0033FF],
    [0x004DC0, 0x004DFF],
    [0x00A48D, 0x00A4CF],
    [0x00A4FE, 0x00A4FF],
    [0x00A60D, 0x00A60F],
    [0x00A620, 0x00A629],
    [0x00A62C, 0x00A63F],
    [0x00A66F, 0x00A673],
    [0x00A67C, 0x00A67E],
    [0x00A6F0, 0x00A716],
    [0x00A720, 0x00A721],
    [0x00A789, 0x00A78A],
    [0x00A7CB, 0x00A7CF],
    [0x00A7DA, 0x00A7F1],
    [0x00A828, 0x00A83F],
    [0x00A874, 0x00A87F],
    [0x00A8C6, 0x00A8F1],
    [0x00A8F8, 0x00A8FA],
    [0x00A900, 0x00A909],
    [0x00A92B, 0x00A92F],
    [0x00A953, 0x00A95F],
    [0x00A97D, 0x00A97F],
    [0x00A9C0, 0x00A9CE],
    [0x00A9D0, 0x00A9DF],
    [0x00A9F0, 0x00A9F9],
    [0x00AA37, 0x00AA3F],
    [0x00AA4E, 0x00AA5F],
    [0x00AA77, 0x00AA79],
    [0x00AAC3, 0x00AADA],
    [0x00AADE, 0x00AADF],
    [0x00AAF0, 0x00AAF1],
    [0x00AAF6, 0x00AB00],
    [0x00AB07, 0x00AB08],
    [0x00AB0F, 0x00AB10],
    [0x00AB17, 0x00AB1F],
    [0x00AB6A, 0x00AB6F],
    [0x00ABEB, 0x00ABFF],
    [0x00D7A4, 0x00D7AF],
    [0x00D7C7, 0x00D7CA],
    [0x00D7FC, 0x00DBFF],
    [0x00E000, 0x00F8FF],
    [0x00FA6E, 0x00FA6F],
    [0x00FADA, 0x00FAFF],
    [0x00FB07, 0x00FB12],
    [0x00FB18, 0x00FB1C],
    [0x00FBB2, 0x00FBD2],
    [0x00FD3E, 0x00FD4F],
    [0x00FD90, 0x00FD91],
    [0x00FDC8, 0x00FDEF],
    [0x00FDFC, 0x00FE6F],
    [0x00FEFD, 0x00FF20],
    [0x00FF3B, 0x00FF40],
    [0x00FF5B, 0x00FF65],
    [0x00FFBF, 0x00FFC1],
    [0x00FFC8, 0x00FFC9],
    [0x00FFD0, 0x00FFD1],
    [0x00FFD8, 0x00FFD9],
    [0x00FFDD, 0x00FFFF],
    [0x01004E, 0x01004F],
    [0x01005E, 0x01007F],
    [0x0100FB, 0x01013F],
    [0x010175, 0x01027F],
    [0x01029D, 0x01029F],
    [0x0102D1, 0x0102FF],
    [0x010320, 0x01032C],
    [0x01034B, 0x01034F],
    [0x01037B, 0x01037F],
    [0x01039E, 0x01039F],
    [0x0103C4, 0x0103C7],
    [0x0103D6, 0x0103FF],
    [0x01049E, 0x0104AF],
    [0x0104D4, 0x0104D7],
    [0x0104FC, 0x0104FF],
    [0x010528, 0x01052F],
    [0x010564, 0x01056F],
    [0x0105BD, 0x0105FF],
    [0x010737, 0x01073F],
    [0x010756, 0x01075F],
    [0x010768, 0x01077F],
    [0x0107BB, 0x0107FF],
    [0x010806, 0x010807],
    [0x010839, 0x01083B],
    [0x01083D, 0x01083E],
    [0x010856, 0x01085F],
    [0x010877, 0x01087F],
    [0x01089F, 0x0108DF],
    [0x0108F6, 0x0108FF],
    [0x010916, 0x01091F],
    [0x01093A, 0x01097F],
    [0x0109B8, 0x0109BD],
    [0x0109C0, 0x0109FF],
    [0x010A07, 0x010A0B],
    [0x010A36, 0x010A5F],
    [0x010A7D, 0x010A7F],
    [0x010A9D, 0x010ABF],
    [0x010AE5, 0x010AFF],
    [0x010B36, 0x010B3F],
    [0x010B56, 0x010B5F],
    [0x010B73, 0x010B7F],
    [0x010B92, 0x010BFF],
    [0x010C49, 0x010C7F],
    [0x010CB3, 0x010CBF],
    [0x010CF3, 0x010CFF],
    [0x010D28, 0x010E7F],
    [0x010EAD, 0x010EAF],
    [0x010EB2, 0x010EFF],
    [0x010F1D, 0x010F26],
    [0x010F28, 0x010F2F],
    [0x010F46, 0x010F6F],
    [0x010F82, 0x010FAF],
    [0x010FC5, 0x010FDF],
    [0x010FF7, 0x010FFF],
    [0x011046, 0x011070],
    [0x011076, 0x011081],
    [0x0110B9, 0x0110C1],
    [0x0110C3, 0x0110CF],
    [0x0110E9, 0x0110FF],
    [0x011133, 0x011143],
    [0x011148, 0x01114F],
    [0x011173, 0x011175],
    [0x011177, 0x01117F],
    [0x0111C5, 0x0111CD],
    [0x0111D0, 0x0111D9],
    [0x0111DD, 0x0111FF],
    [0x011235, 0x011236],
    [0x011238, 0x01123D],
    [0x01123F, 0x01127F],
    [0x0112A9, 0x0112AF],
    [0x0112E9, 0x0112FF],
    [0x01130D, 0x01130E],
    [0x011311, 0x011312],
    [0x01133A, 0x01133C],
    [0x011345, 0x011346],
    [0x011349, 0x01134A],
    [0x01134D, 0x01134F],
    [0x011351, 0x011356],
    [0x011358, 0x01135C],
    [0x011364, 0x0113FF],
    [0x01144B, 0x01145E],
    [0x011462, 0x01147F],
    [0x0114C2, 0x0114C3],
    [0x0114C8, 0x01157F],
    [0x0115B6, 0x0115B7],
    [0x0115BF, 0x0115D7],
    [0x0115DE, 0x0115FF],
    [0x011641, 0x011643],
    [0x011645, 0x01167F],
    [0x0116B6, 0x0116B7],
    [0x0116B9, 0x0116FF],
    [0x01171B, 0x01171C],
    [0x01172B, 0x01173F],
    [0x011747, 0x0117FF],
    [0x011839, 0x01189F],
    [0x0118E0, 0x0118FE],
    [0x011907, 0x011908],
    [0x01190A, 0x01190B],
    [0x011939, 0x01193A],
    [0x01193D, 0x01193E],
    [0x011943, 0x01199F],
    [0x0119A8, 0x0119A9],
    [0x0119D8, 0x0119D9],
    [0x0119E5, 0x0119FF],
    [0x011A33, 0x011A34],
    [0x011A3F, 0x011A4F],
    [0x011A98, 0x011A9C],
    [0x011A9E, 0x011AAF],
    [0x011AF9, 0x011BFF],
    [0x011C41, 0x011C71],
    [0x011C90, 0x011C91],
    [0x011CB7, 0x011CFF],
    [0x011D37, 0x011D39],
    [0x011D44, 0x011D45],
    [0x011D48, 0x011D5F],
    [0x011D99, 0x011EDF],
    [0x011EF7, 0x011FAF],
    [0x011FB1, 0x011FFF],
    [0x01239A, 0x0123FF],
    [0x01246F, 0x01247F],
    [0x012544, 0x012F8F],
    [0x012FF1, 0x012FFF],
    [0x01342F, 0x0143FF],
    [0x014647, 0x0167FF],
    [0x016A39, 0x016A3F],
    [0x016A5F, 0x016A6F],
    [0x016ABF, 0x016ACF],
    [0x016AEE, 0x016AFF],
    [0x016B30, 0x016B3F],
    [0x016B44, 0x016B62],
    [0x016B78, 0x016B7C],
    [0x016B90, 0x016E3F],
    [0x016E80, 0x016EFF],
    [0x016F4B, 0x016F4E],
    [0x016F88, 0x016F8E],
    [0x016FA0, 0x016FDF],
    [0x016FE4, 0x016FEF],
    [0x016FF2, 0x016FFF],
    [0x0187F8, 0x0187FF],
    [0x018CD6, 0x018CFF],
    [0x018D09, 0x01AFEF],
    [0x01B123, 0x01B14F],
    [0x01B153, 0x01B163],
    [0x01B168, 0x01B16F],
    [0x01B2FC, 0x01BBFF],
    [0x01BC6B, 0x01BC6F],
    [0x01BC7D, 0x01BC7F],
    [0x01BC89, 0x01BC8F],
    [0x01BC9A, 0x01BC9D],
    [0x01BC9F, 0x01D3FF],
    [0x01D4A0, 0x01D4A1],
    [0x01D4A3, 0x01D4A4],
    [0x01D4A7, 0x01D4A8],
    [0x01D50B, 0x01D50C],
    [0x01D547, 0x01D549],
    [0x01D6A6, 0x01D6A7],
    [0x01D7CC, 0x01DEFF],
    [0x01DF1F, 0x01DFFF],
    [0x01E019, 0x01E01A],
    [0x01E02B, 0x01E0FF],
    [0x01E12D, 0x01E136],
    [0x01E13E, 0x01E14D],
    [0x01E14F, 0x01E28F],
    [0x01E2AE, 0x01E2BF],
    [0x01E2EC, 0x01E7DF],
    [0x01E8C5, 0x01E8FF],
    [0x01E944, 0x01E946],
    [0x01E948, 0x01E94A],
    [0x01E94C, 0x01EDFF],
    [0x01EE25, 0x01EE26],
    [0x01EE3C, 0x01EE41],
    [0x01EE43, 0x01EE46],
    [0x01EE55, 0x01EE56],
    [0x01EE65, 0x01EE66],
    [0x01EE9C, 0x01EEA0],
    [0x01EEBC, 0x01F12F],
    [0x01F14A, 0x01F14F],
    [0x01F16A, 0x01F16F],
    [0x01F18A, 0x01FFFF],
    [0x02A6E0, 0x02A6FF],
    [0x02B739, 0x02B73F],
    [0x02B81E, 0x02B81F],
    [0x02CEA2, 0x02CEAF],
    [0x02EBE1, 0x02F7FF],
    [0x02FA1E, 0x02FFFF],
    [0x03134B, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Alphabetic}+$/u,
  nonMatchSymbols,
  "\\P{Alphabetic}"
);
testPropertyEscapes(
  /^\P{Alpha}+$/u,
  nonMatchSymbols,
  "\\P{Alpha}"
);

reportCompare(0, 0);
