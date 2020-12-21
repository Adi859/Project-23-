class Box {
 constructor (x,y,w,h) {
    
        var prop1 = {
            
        isStatic : true 
            
        }

        this.body = Bodies.rectangle(x,y,w,h,prop1) ;
        //World.add(world,this.body) ;
        this.w = w  ;
        this.h = h ; 

    }

display () {
    rectMode(CENTER) ; 
    rect(this.body.position.x , this.body.position.y, this.w , this.h) ; 
               }
           
               }
    
