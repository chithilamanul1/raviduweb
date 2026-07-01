export const manifest = {
  screens: {
    scr_qb79nm: { name: "Home", route: "/#home", position: {"x":160,"y":220} },
    scr_h1gc13: { name: "About", route: "/#about", position: {"x":1560,"y":220} },
    scr_30k3zd: { name: "Music", route: "/#music", position: {"x":2960,"y":220} },
    scr_rrh84w: { name: "Classes", route: "/#classes", position: {"x":4360,"y":220} },
    scr_3dxavn: { name: "Contact", route: "/#contact", position: {"x":5760,"y":220} },
  },
  sections: {
    sec_vbsq9a: { name: "Main Navigation", x: 0, y: 0, width: 7120, height: 1180 },
  },
  layers: [
    { kind: "section", id: "sec_vbsq9a", children: [
      { kind: "screen", id: "scr_qb79nm" },
      { kind: "screen", id: "scr_h1gc13" },
      { kind: "screen", id: "scr_30k3zd" },
      { kind: "screen", id: "scr_rrh84w" },
      { kind: "screen", id: "scr_3dxavn" },
    ] },
  ],
}
