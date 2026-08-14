# Normal Nodes

| Node | Description |
|------|-------------|
| [Curvature Smooth](./curvature-smooth.md) | Computes smooth curvature from a tangent-space normal map. Flat areas are 50% gray, convex areas are brighter, and concave areas are darker. Separate convexity and concavity masks are also provided. |
| [Facing Normal](./facing-normal.md) | Facing Normal node is one of those deceptively simple utility nodes.   It outputs a grayscale mask based on how much a surface’s normal faces a given view direction (usually the camera or a user‑defined vector). |
| [Height Normal Blend](./height-normal-blend.md) | Height Normal Blender is one of those deceptively simple but absolutely essential utility nodes. It blends: |
| [Height Normal Curvature Blend](./height-normal-curvature-blend.md) | - Take base normal, detail normal, and height |
| [Heightmap To Bent Normal](./heightmap-to-bent-normal.md) | Converts a heightmap into a bent normal map by scanning nearby height samples and bending the normal toward the least occluded direction. |
| [Masked Normal Blend](./masked-normal-blend.md) | Blends Normal B over Normal A through a grayscale mask. |
| [Normal Add](./normal-add.md) | Add two normal maps using the surface gradient functions. |
| [Normal Blend](./normal-blend.md) | Blends two normals |
| [Normal Intensity](./normal-intensity.md) | Scales the strength of a tangent-space normal map while keeping the output normalized. |
| [Normal Invert](./normal-invert.md) | - Takes a tangent‑space normal map |
| [Normal Multiply](./normal-multiply.md) | Multiplies a normal by another normal and/or a constant |
| [Normal Normalize](./normal-normalize.md) | Normal Normalize is one of those tiny but essential utility nodes every procedural pipeline needs. It ensures that any incoming normal map (even if modified, blended, warped, or partially invalid) is re‑normalized back into a proper tangent‑space unit vector. |
| [Normal Rotate](./normal-rotate.md) | Rotate the normal map vector with a certain angle in degree. |
| [Normal Sobel](./normal-sobel.md) | it converts a height map into a tangent‑space normal map using Sobel gradients. |
| [Normal To Height](./normal-to-height.md) | A normal map encodes: |
| [Normal Vector Rotation](./normal-vector-rotation.md) | Normal Vector Rotation is a fantastic utility node — it lets you rotate a tangent‑space normal map by an arbitrary angle, which is incredibly useful for: |
| [To Normal](./to-normal.md) | Converts a height map to a tangent-space normal map in either DirectX or OpenGL format. |
