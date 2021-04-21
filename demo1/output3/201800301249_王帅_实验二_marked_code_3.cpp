

#include "myFunctions.h"
#include <iostream>
using namespace std;

int main()
{
	int x1[10];
	int x2[3][5];
	
	cout<<"请输入一维数组："<<endl;
	for(int m=0;m<10;m++)
	{
		cin>>x1[m];
	}
	
	cout<<"请输入二维数组："<<endl;
	for(int m=0;m<3;m++)
	  for(int n=0;n<5;n++)
	  {
	  	cin>>x2[m][n];
	  }
	
	cout<<endl<<"输入的一维数组："<<endl;
	for(int m=0;m<10;m++)
	{
		cout<<x1[m]<<" "; 
	}
	
	cout<<endl<<"输入的二维数组："<<endl;
	for(int m=0;m<3;m++)
	{
	   for(int n=0;n<5;n++)
	   {
	  	  cout<<x2[m][n]<<" ";
	   }
	   cout<<"\n"; 
	}
	
	cout<<"一维数组最大值："<<endl;
	int m1 = findMaxElement1D(x1,10);
	cout<<m1<<endl;
	
	cout<<"二维数组最大值："<<endl;
	int m2 = findMaxElement2D(x2,3);
	cout<<m2<<endl;
	
	cout<<"排序后的一维数组："<<endl;
	sort1D(x1,10);
	for(int m=0;m<10;m++)
	{
		cout<<x1[m]<<" "; 
	}
	
	return 0;
}
