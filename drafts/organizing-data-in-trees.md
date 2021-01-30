---
title: 'Organizing Data in Trees'
description: In computer science trees are a data structure that look like an inverted tree with the root at the top and branches growing downard
category: Computer Science
date: 2020-11-26T00:00:00Z
---

## A tree is a a common data structure that actually resembles a tree, but inverted. The root is at the botom and the branches grown downard.

Each one of these downward growing branch is made up of nodes, and these nodes are linked in a specific order.

### Terminology

Nodes: are numerical points that contain some form of data
Edges: are the lines that stress the direction of where the tree is growing

Together, the nodes and their attached edges create a tree.

### Two types of trees

1. An empty tree
2. A node with a list of successor trees

An empty tree is no fun, so we'll be focusing on a node with a list of successor trees. Generally, nodes are labelled with some sort of data -- either a number or a search key. The label for this data is called the node's value.

These values can be any sort of data: numbers, strings, objects etc. 

### Parts of a tree

**Root:** top level node
 
When visualizing a tree, in computer science, these trees are displayed upside down, with the root node on top, and its branches stemming downward from that node.

**children:** nodes that directly connect to the root node

When visualizing a tree, you first look at the root node, then follow the branch down to find connecting nodes. Those connecting nodes are the children

**Sibilings:** two nodes that have the same root node

If two nodes share the same level and their branches connect to the same parent node. Then they are considered siblings

You can see that a tree follows the same structure as a nuclear family. You have parents, children and those children are siblings.

### Tree's structure

Nodes that connect in descending order are considered descendants of one another. And if a node descends from another node but doesn't have any children. Then that node is known as a leaf. 

Connected nodes create a path, and we determine how deep the tree goes by the length of this path. For example, the root of a tree is level 0, and its direct path is its children. The children of the root fall on level one, and their children fall on level two, and so on and so forth.

If the tree is just a single node, the root node, then you would say the tree has a height of 0 and the size of 1.  Funny enough, if a tree doesn't contain any nodes, then it has the size 0 and the height -1. 

To build a tree, you would use a class-based programming language like Python or C++ to create a class constructor function that will utilize primitive operations, selectors, and conditional statements to generate a dynamic tree of nodes. 

### Tree Examples

#### A Quad Tree



