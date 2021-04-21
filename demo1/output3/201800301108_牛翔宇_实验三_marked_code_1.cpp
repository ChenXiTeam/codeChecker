
#include<iostream>
using namespace std;

void sort1(int x, int y, int z);
void sort2(int *x, int *y, int *z);
void sort3(int &x, int &y, int &z);

int main(){
	int a, b, c; 
	
	cout << "请输入三个不同大小的整数：" << endl;
	cin >> a >> b >> c;
	
	int a1 = a, b1 = b, c1 = c;
	int *a2 = &a, *b2 = &b, *c2 = &c;
	int &a3 = a, &b3 = b, &c3 = c;
	
	sort1(a1, b1, c1);
	cout << a1 << "\t" << b1 << "\t" << c1 << "\n" << endl;
	
	sort2(a2, b2, c2);
	cout << *a2 << "\t" << *b2 << "\t" << *c2 << "\n" << endl;
	
	sort3(a3, b3, c3);
	cout << a3 << "\t" << b3 << "\t" << c3 << "\n" << endl;
	
	return 0;
}

void sort1(int x, int y, int z){
	int t;
	if(x > y){
		t = x;
		x = y;
		y = t;
	}
	if(y > z){
		t = y;
		y = z;
		z = t;
	}		
	if(x > y){
		t = x;
		x = y;
		y = t;
	}	
}

void sort2(int *x, int *y, int *z){
	int t;
	if(*x > *y){
		t = *x;
		*x = *y;
		*y = t;
	}
	if(*y > *z){
		t = *y;
		*y = *z;
		*z = t;
	}		
	if(*x > *y){
		t = *x;
		*x = *y;
		*y = t;
	}	
}

void sort3(int &x, int &y, int &z){
	int t;
	if(x > y){
		t = x;
		x = y;
		y = t;
	}
	if(y > z){
		t = y;
		y = z;
		z = t;
	}
	if(x > y){
		t = x;
		x = y;
		y = t;
	}	
}
