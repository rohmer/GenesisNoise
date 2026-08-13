# Onyx Example
This example creates polished onyx with layered translucent-looking bands and surface scratches. It uses:
- Directional and warp noise
- Multiple Gradient nodes
- [Directional Warp](../../Nodes/transform/directional-warp.md)
- [Levels](../../Nodes/color/levels.md) and [Auto Levels](../../Nodes/color/auto-levels.md)
- [Gradient Map](../../Nodes/color/gradient-map.md)
- [Enum Switch](../../Nodes/conditional/enum-switch.md)
- [To Normal](../../Nodes/normal/to-normal.md) and [Normal To Height](../../Nodes/normal/normal-to-height.md)
- Ambient Occlusion, Bent Normal, and [Texture Pack](../../Nodes/texture/texture-pack.md)

The exposed **Color Set** enum selects the stone palette.

## How it works
### Mineral banding
Directional and warp-noise fields distort several gradients into flowing mineral layers. Levels and inversion vary the thickness and spacing, while blends combine broad bands with thinner veins.

### Palette and finish
Gradient Maps turn the grayscale structure into alternate onyx colors. **Color Set** drives Enum Switch nodes to keep the selected color treatment consistent across the graph. Fine scratch generators add restrained surface wear to the polished material.

### Outputs
Four legacy, unnamed Texture2D outputs receive the final Gradient Map color, tangent normal, bent normal, and packed material texture. Assign explicit names before using Onyx as a Blueprint.
