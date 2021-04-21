

#include <iostream>
using namespace std;

double lp(double x, int n){
	double p = 0;
	if(n < 0){
		cout << "ERROR!";
		return 0;
	}
	if(n == 0)
		p = 1;
	if(n == 1)
		p = x;
	if(n > 1){
		p = ((2 * n - 1) * x * lp(x, n - 1) - (n - 1) * lp(x, n - 2)) / n;
	}
	return p;
}

int main(){
	cout << lp(9,2);
	return 0;
}
