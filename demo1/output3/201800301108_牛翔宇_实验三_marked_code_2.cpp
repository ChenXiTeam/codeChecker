

#include<iostream>
using namespace std;

int main(){
	int n;
	int *p;
	cout << "输入n：" << endl;
	cin >> n;
	p = new int[n];
	cout << "输入n个数组元素：" << endl;
	for(int i = 0; i < n; i++){
		cin >> p[i];
	}		
	for(int i = 0; i < n; i++){
		cout << p[i] << "\t"; 
	}
	if (p) { 
		delete []p; 
		p = NULL;
	}  
	return 0;
}
