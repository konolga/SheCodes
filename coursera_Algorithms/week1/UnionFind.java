//Quick Union implementation

{
  private int[] id;

  public QuickUnionUF(int N)
  {
    // set id of each object to itself
    // (N array accesses)
    id = new int[N];
    for (int i = 0; i < N; i++) id[i] = i;
  }

  private int root(int i)
  {
    // chase parent pointers until reach root
    // (depth of i array accesses)
    while (i != id[i]) i = id[i];
    return i;
  }

  public boolean connected(int p, int q)
  {
    // check if p and q have same root
    // (depth of p and q array accesses)
    return root(p) == root(q);
  }

  public void union(int p, int q)
  {
    // change root of p to point to root of q
    // (depth of p and q array accesses)
    int i = root(p);
    int j = root(q);
    id[i] = j;
  }

//Weighted quick-union
    public void union(int p, int q)
  {
    //Link root of smaller tree to root of larger tree.
    //Update the sz[] array.
    if (i == j) return;
    if (sz[i] < sz[j]) { id[i] = j; sz[j] += sz[i]; }
    else { id[j] = i; sz[i] += sz[j]; } 
  }

  //Quick union with path compression
  private int root(int i)
    {
    while (i != id[i])
      {
        //Make every other node in path point to its
        //grandparent (thereby halving path length)
        id[i] = id[id[i]];
        i = id[i];
      }
    return i;
    }
}