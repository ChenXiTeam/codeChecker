

#include <iostream>
using namespace std;

int sum(int a, int b, int c){
	return a + b + c;
}

double sum(double a, double b, double c){
	return a + b + c;
}

float sum(float a, float b, float c){
	return a + b + c; 
}
int main(int argc, char** argv) {
	cout << sum(1, 2, 3) << "\n";
	cout << sum(1.0, 2.0, 3.0) << "\n";
	cout << sum(1.5f, 2.5f, 3.5f);
	
	return 0;
}
