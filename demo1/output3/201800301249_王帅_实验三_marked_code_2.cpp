

#include <iostream>
using namespace std;

int main()
{
	int n;
	cout<<"请输入的数组元素个数n"<<" ";
	cin>>n; 
	
    int *p = new int[n];   //用new动态创建一个动态数组 
    
    cout<<"请输入数组的"<<n<<"个元素："<<endl;
	for(int t=0; t<n; t++)  {cin>>*p++;}
	
	cout<<endl;
	for(int t=0; t<n; t++)  {*p--;}  //是指针p重新指向数组首地址 
	
	cout<<"输出数组所有元素的值："<<endl;
	for(int t=0; t<n; t++)  {cout<<*p++<<" ";}
}
