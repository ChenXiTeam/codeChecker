

#include "myFunctions.h"
#include<iostream>
using namespace std;

int main(){
	int a[8];
	int b[3][5];
	
	cout << "enter a 1D array:" << endl;
	for(int i = 0; i < 8; i++)
		cin >> a[i];
	for(int i = 0; i < 8; i++)
		cout << a[i] << "\t";
	cout << "\n";
	
	cout << "enter a 2d array:" << endl;
	for(int i = 0; i < 3; i++)
		for(int j = 0; j < 5; j++)
			cin >> b[i][j];
	for(int i = 0; i < 3; i++)
		for(int j = 0; j < 5; j++)
			cout << b[i][j] << "\t";
	cout << "\n";
	
	sort1D(a, 8);
	cout << "\n" << endl;
	cout << "the max in 1D array is: " << findMaxElement1D(a, 8) << "\n";
	cout << "the max in 2D array is: " << findMaxElement2D(b, 3) << "\n";
	cout << "1D array sorted:";
	for(int i = 0; i < 8; i ++)
		cout << a[i] << "\t";
	
	return 0;
}
