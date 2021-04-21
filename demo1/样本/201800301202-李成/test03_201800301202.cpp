#include<iostream>
using namespace std;

class Node{
	
	public:
		
		int key;
		
		Node* next;
	
		
		Node(int k , Node* n){
		
			key = k;
			
			this->next = n;
		
		}
	
};


class LinkedList{
	
	private:
		
	Node* firstNode ;	
	
	Node* p;
	
	public:
		
		LinkedList(){
		
		firstNode = NULL;

		}
		
		LinkedList(Node* n){
			
			firstNode = n;
			
		}
		
		void insert(int k){
			
			if(firstNode == NULL){
				
				this->firstNode = new Node(k,NULL);
				
			}
			else{
		
				if(k<firstNode->key){
					
					firstNode = new Node(k,firstNode);
				}
				
				else{
					
					p = firstNode;
								
					while(p->next!=NULL&&k>p->next->key)
				
					p = p->next; 
			
					p->next = new Node(k,p->next);
					
					}
			} 
			
		}
		
		void output(){
			
			p = firstNode;
			
			while( p != NULL&&p->next!=NULL){
			
			cout<<p->key<<",";
		
			p = p->next;
			
			}
			
			cout<<p->key<<endl;
			
		}
		
		
		int find(int k){
			
			int number=1;
			
			p = firstNode;
			
			while(p!=NULL&&p->key!=k){
				
				p = p->next;
				
				number++;
			}
			
			if(p!=NULL) return number;
			else return 0 ;
			
		} 

		int first(){
			
			return firstNode->key;
		}
		
		
		void combine(LinkedList list){
			
			p = firstNode;
			
			while(p!=NULL){
			
				list.insert(p->key);
			
				p = p->next;
				
				delete firstNode;
				
				firstNode = p;
				
			}
		}
		
};

int main(){
	
	LinkedList List ;
	
	int k;
	
	cout<<"input1"<<endl;
	
	cin>>k;
	
	while(k!=0){
		
		List.insert(k);
	
		cin>>k;
	}
	
	cout<<"output1"<<endl;
	List.output();
	
	cout<<"input2"<<endl;
	
	cin>>k;
	
	if(k!=0)
	
	List.insert(k);
	
	cout<<"output2"<<endl;
	
	List.output();
	
	cout<<"input3"<<endl;
	
	cin>>k;
	
	cout<<"output3"<<endl;
	
	cout<<List.find(k)<<endl;
	
	cout<<"input4"<<endl;
	
	cin>>k;
		
	cout<<"output4"<<endl;
	
	cout<<List.find(k)<<endl;

	LinkedList List2 ;
	
	cout<<"input5"<<endl;
	
	cin>>k;
	
	while(k!=0){
		
		List2.insert(k);
	
		cin>>k;
	}
	
	cout<<"output5"<<endl;
	List2.output();
	if(List.first()>List2.first()){
	
	List.combine(List2);
	
	List2.output();
	
	}
	else{
	
	List2.combine(List);
	List.output();
	}
		
	cout<<"End"<<endl;
	
} 
