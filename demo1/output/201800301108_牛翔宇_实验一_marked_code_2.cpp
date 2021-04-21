

#include<iostream>
using namespace std;

int main(){
	//赋初值，使c1,c2,c3,c4,c5这5个变量的值分别为'C' 'h' 'i' 'n' 'a' 
	char c1 = 'C', c2 = 'h', c3 = 'i', c4 = 'n', c5 = 'a';
	//用原来的字母后面第4个字母代替原来的字母 
	c1 += 4;
	c2 += 4;
	c3 += 4;
	c4 += 4;
	c5 += 4;
	//输出密码 
	cout << c1 << c2 << c3 << c4 << c5;
}
