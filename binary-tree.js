/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    else {
      let depth = 1;
      function rec(n) {
        if (!n.left && !n.right) {
          return depth;
        }
        return Math.min(1 + rec(n.left), 1 + rec(n.right));
      }
      return rec(this.root);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    else {
      let depth = 1;
      function rec(n) {
        if (!n.left && !n.right) {
          return depth;
        }
        return Math.max(1 + rec(n.left), 1 + rec(n.right));
      }
      return rec(this.root);
    }
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;

    let maxSum = -Infinity;

    function rec(n) {
      if (!n) return 0;

      // Call left and right children
      const leftSum = Math.max(rec(n.left), 0);
      const rightSum = Math.max(rec(n.right), 0);

      // Add them together
      const currentMax = n.val + leftSum + rightSum;

      // Updata total
      maxSum = Math.max(maxSum, currentMax);

      return n.val + Math.max(leftSum, rightSum);
    }

    rec(this.root);
    return maxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    else {
      const nums = [];
      function rec(n) {
        if (!n) {
          return;
        }

        if (n.val > lowerBound) {
          nums.push(n.val);

          rec(n.left);
          rec(n.right);
        }

        rec(n.left);
        rec(n.right);
      }

      rec(this.root);
      nums.sort(function (a, b) {
        return a - b;
      });

      return nums[0] || null;
    }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
