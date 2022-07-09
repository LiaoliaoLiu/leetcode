export default class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    static insertLevelOrder(arr: number[], i: number, n: number): TreeNode | null {
        let root: TreeNode | null = null;
        if (i < n && arr[i]) {
            root = new TreeNode(arr[i], null, null);
            root.left = this.insertLevelOrder(arr, 2*i + 1, n);
            root.right = this.insertLevelOrder(arr, 2*i + 2, n);
        }
        return root;
    }

    static toTree(arr: number[]): TreeNode | null {
        return TreeNode.insertLevelOrder(arr, 0, arr.length);
    }
}
