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

A quadtree is a structured data tree where each leaf node (a node with no children) has a value, and non-leaf nodes have precisely four children. The nodes in a quadtree structure tree can either have a number value ranging from 0 to 255 or a node without a value and four children (lu, ll, ru, and rl).

A quadtree is one of the following:
1. A root node with a value (0 to 255)
2. a root node with a value and four children (lu, ll, ru, and rl)

To build a program that follows the rules above, we first need to write code that meets the following expectations
* A function that returns true if a quadtree is a single node
* A function that returns a single node quadtree with label value 
* A function that creates a quadtree from four other quadtrees

Then we need to define functions that return the following nodes from a tree
* A function that returns the upper left quadtree
* A function that returns the upper right quadtree
* A function that returns the lower-left quadtree
* A function that returns the lower righter quadtree

At this point, if you are thinking, "I'm lost, and this is confusing." Please bear with me. I want to define the specific pieces of a quadtree before take a look at the big picture. 

Like my Dad would say "Onward and upward McGuff"

Here are a few more facts about building a program that creates a quadtree data structure

* The function that returns the value of a node can never be false
* When that same function returns true, we can also set a operator value that returns the node's actual value instead of only its boolean.

I broke down the structure of a program to create a quadtree in pseudo-code. 

Now, what real-world uses do we have for a quadtree data structure?
1. The most common use is to save a gray-value graphic (0 representing black and 255 representing white).
2. Another use for a quadtree data structure is to create a program that will rotate an image 180 degrees.

### Introduction to Binary Trees
The most common tree used in computer science is the binary tree. And what defines a binary tree is that every node has at the most two children. 

There are two rules for every binary tree
A binary tree is either empty or 
It consists of a node and two binary trees, the left subtree and the right subtree. 

Rule 1 is the base case, which means that there isn't a list of steps to resolve, and Rule 2 is the induction step.  

Let's pause for a second and get something straight. In discrete mathematics, the base case and [induction step's definition is](https://everythingcomputerscience.com/discrete_mathematics/Proof_by_Induction.html#:~:text=Overview%3A,for%20the%20next%20natural%20number).  "The first step, known as the base case, is to prove the given statement for the first natural number. The second step, known as the inductive step, is to prove that the given statement for anyone natural number implies the given statement for the next natural number."

Let's pseudo-code a binary tree, and to get started, you apply rule one (you have to start somewhere). Remember rule one creates an empty tree, but a tree nonetheless. We are dedicating space in our computer memory for a data structure but haven't added any data yet. The process is the same as digging a hole in the ground but haven't planted any seeds yet. Once rule one is complete, you are now allowed to start created a tree. To construct the tree, you need to apply rule two. You set the root node with a value but no children. Using the new root node value, you can create two more nodes. From those two nodes, they can sprout and branch to either one two nodes, and this process can go on until the control is resolved or if the computer runs out of memory.

### The height of a binary tree

The relationship between size (n) and height (h) for binary trees isn't simple.

To calculate the max-height of a given binary tree is (n-1), which happens when all non-leaf nodes have only a single child.  Visually this will look like a chain. 

Adversely, to calculate the min-height of a binary tree, we need to start at the root. We work through each level of the tree without adding any new levels. When the left and right subtrees' height doesn't differ, we call it a height-balanced tree.

<!-- Insert a good way to calculate the height of a binary tree  pg. 36 -->

### Binary tree's size



