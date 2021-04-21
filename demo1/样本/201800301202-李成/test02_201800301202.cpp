#include<iostream>
using namespace std;

void Bubble_sort(int a[] , int n){
	
	for(int j = 1 ; j < n ; j++)
	
	for(int i = 0 ; i < n - 1 ; i++){
		
		if(a[i]>a[i+1]) swap(a[i],a[i+1]);
		
	}
	
}

void Insert_sort(int a[] , int n){
	 
	for(int i = 1 ; i < n ; i++ )//Òª²åÈëµÄÐòºÅi 
	
		for(int j = 0 ; j < i ; j++){
			
			if(a[j]>a[i]){
				
				int t = a[i];
				
				for(int p = i-1 ; p >= j ; p--)
					
					a[p+1] = a[p];
				
				a[j]=t;
			}
		}
	}

void Radix_sort(int a[],int n){
	
	int j=0,range = 10;
	
	int bin[10][n];
	
	
	for(int row = 0 ; row < 10 ; row++){
		
		for(int col = 0 ; col < n ;col++ )
		
			bin[row][col] = 0;
		}
	
	for(int i = 0 ; i < n; i++){
		
		while(bin[a[i]%range][j]!=0){
		
			j++;
			
		}
		
		bin[a[i]%range][j]=a[i]; 
		
		j=0;
	}
	
	int u = 0;
	int num=0;	
		int v = 0 ;
		while(u<10){
		
		while(bin[u][v]!=0){
		
			a[num] = bin[u][v];
			
			num++;
			v++;	
		}
		
		v=0;
		u++;
	}
}
	

int main(){
	
	int a[20];
	int i = 0,number,choice;
	
	cout<<"Input"<<endl;
	
	cin>>number;
	
	while(i < 20 && number > 0 ){
		
		a[i] = number;
			
		cin>>number;
		
		i++;
	
	}	
	
	cout<<"1-Bubble Sort,2-Insert Sort,3-Radix Sort"<<endl;
	
	cin>>choice;
	cout<<"Output"<<endl;
	
	if(choice==1){
		
		cout<<"Bubble Sort"<<endl;
		
		Bubble_sort(a , i);	
		
		for(int k = 0 ; k < i ; k++){
			
			if(k<i-1)
				cout<<a[k]<<",";
			else
				cout<<a[k]<<endl;
				
		}	
	}
	
	if(choice==2){
		
		cout<<"Insert Sort"<<endl;
		
		Insert_sort(a , i);	
		
		for(int k = 0 ; k < i ; k++){
			
			if(k<i-1)
				cout<<a[k]<<",";
			else
				cout<<a[k]<<endl;
				
		}
	} 
	
	if(choice==3){
		
		cout<<"Radix Sort"<<endl;
		
		bool border = false;
		
		for(int q = 0 ; q < i ; q++){
			
			if(a[q]>=10)
			
			border = true;
		}
		
		if(border == false){
			
			Radix_sort(a , i);	
		
			for(int k = 0 ; k < i ; k++){
			
				if(k<i-1)
					cout<<a[k]<<",";
				else
					cout<<a[k]<<endl;
			}
		
		}
		
		else cout<<0<<endl;
		
	}
	
	cout<<"End"<<endl;
}
 
