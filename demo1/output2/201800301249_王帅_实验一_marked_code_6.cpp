

#include <iostream>
using namespace std;
template <typename T>

T sum(T a,T b,T c)
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
