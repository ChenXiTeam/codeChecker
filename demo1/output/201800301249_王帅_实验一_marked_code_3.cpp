

#include <iostream>
using namespace std;

double iteration(double x,double a)   
{
	double y;
	y=0.5*(x+a/x);
	return y;
}

int main()
{
	double x=1.0,a,x1,c;
	cin>>a;
	if(a<0)
	{
	  cout<<"不能输入负数！";
	  return 0;
    }
    
    x1=iteration(x,a);
    c=x1-x;
	while(c<=-0.00001||c>=0.00001)
	{
	  x=x1;
	  x1=iteration(x1,a);
	  c=x1-x;
    }
    
	cout<<x1;
	return 0;
}
