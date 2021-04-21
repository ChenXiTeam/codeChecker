

int findMaxElement1D(int x[],int n)    //返回一维数组中的最大值
{
	int max=x[0];
	for(int i=1;i<n;i++)
	{
	    if(x[i]>max)
	    max=x[i];
	}
	return max;
}

int findMaxElement2D(int x[][5],int r)    //返回二维数组中的最大值
{
	int max=x[0][0];
	for(int m=0;m<r;m++)
	{
		for(int n=0;n<5;n++)
		{
			if(x[m][n]>max)
			max=x[m][n];
		}
	}
	return max;
}

void sort1D(int x[],int n)    //对一维数组用冒泡法排序
{
    for (int j=0; j<n-1; j++)
    {
    	bool s=true;
    	for (int i=0; i<n-1-j; i++)
    	{
    		if (x[i]>x[i+1])
    		{
    			s=false;
    			int t=x[i];
                x[i]=x[i+1];
                x[i+1]=t;
			}
		}
		if(s) break;
	}
}
