

#include <iostream>
using namespace std;

double count(double n,double x)
{
	double a;
	if(n==0)  return 1;
    if(n==1)  return x;
    if(n>1)
	{
	   a=((2*n-1)*x*count((n-1),x)-(n-1)*count((n-2),x))/n;  //递归
	   return a;
	} 
}

int main()
{
	double n,x,a;
	cout<<"请输入n的值：";
	cin>> n;
	cout<<"请输入x的值：";
	cin>> x;
	
	a=count(n,x);
	cout<<"勒让德多项式的值为:"<<a;
}
 