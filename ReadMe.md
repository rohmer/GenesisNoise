# Genesis Noise
Genesis Noise is a node based tool for modeling, texturing, material creation and rendering realistic 3D assets.

## Examples
The best was to learn how to use Genesis Noise is by examples.  There are examples for Mesh, Custom Nodes, Terrain and Textures.  These can be found in the [Examples](Documentation/Examples/index.md).

## Nodes
Nodes are the bread and butter of Genesis Noise.  They are the items that actually do things.  Each node has potentially:
  * Node inputs - Where you can connect other nodes to this one
  * Node outputs - The outcome of the nodes processing
  * Settings - Nodes can and do have a number of settings defining how they are controlled

There are over 1000 different node types and they are explained in [Nodes](Documentation/Nodes/index.md)

## Functions
Functions work similarly to nodes except they are a specific set of nodes grouped as a function.  Think of them as subroutines within the Genesis Noise space.  They are useful for:
  * Consistently reused items
  * Simplifying graphs
  * Consistent output

Functions are described in detail in [Functions](Documentation/Functions/index.md)

## Graphs
Graphs are collections of nodes and the connections between them that do something within Genesis Noise.  They can create a texture, mesh or terrain.  They are explained in detail in [Graphs](Documentation/Graphs/index.md)

## Blueprint
Blueprints are embedded graphs.  This too is a convenience function for embedding graphs within graphs.  More information can be found in [Blueprints](Documentation/Blueprints/index.md)

## Parameters
Parameters are variables scoped to an entire graph.  They are used a couple of ways:
  * To define variables that change how a graph is processed
  * Intermediate variables used within the graph.

Parameters can be hidden, so they are not displayed when the graph is inspected.  This is useful for temporary variables within a graph.

Non-hidden variables can be used for options on how a graph is processed.

Parameters are explained in detail in [Parameters](Documentation/Parameters/index.md)