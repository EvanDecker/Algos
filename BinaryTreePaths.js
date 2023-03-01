/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

 

Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]
 

Constraints:

The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100
*/

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 var binaryTreePaths = function(root, currentPath = [], pathsToLeaves = []) {
  //i: root of binary tree
  // tailcall recursion with an array that tracks the current path to the node?
  currentPath.push(root.val);

  if(root.left) binaryTreePaths(root.left, [...currentPath], pathsToLeaves);
  if(root.right) binaryTreePaths(root.right, [...currentPath], pathsToLeaves);
  if(!root.left && !root.right) {
      // format current path
      currentPath = currentPath.join('->');
      pathsToLeaves.push(currentPath);
  }

  return pathsToLeaves;
  //o: path to the leaf nodes of the tree formatted as follows (array of string with arrow things lmao)
  // ["1->2->5","1->3"]
};

