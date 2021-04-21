

#include <iostream>
using namespace std;

int sum(int a,int b,int c)
{
	return a+b+c;
}

float sum(float a,float b,float c)
{
	return a+b+c;
}

double sum(double a,double b,double c)
{
	return a+b+c;
}

int main()
{
	cout<<"1+2+3="<<sum(1,2,3)<<endl;
	cout<<"1.5+2.5+3.5="<<sum(1.5,2.5,3.5)<<endl;
	cout<<"f1.2+f2.2+f3.2="<<sum((float)1.2,(float)2.2,(float)3.2)<<endl;
	return 0;
}
