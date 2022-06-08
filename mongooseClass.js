const mongoose=require('mongoose');

class DBmongooseClass{
    constructor(collation,schema){
      
        this.CollData=mongoose.model(collation,new mongoose.Schema(schema));
    }

    find(data={}){
        return this.CollData.find(data);
    }

     insert(data){        
        let action= new this.CollData(data);
        return action.save();
    }

     update(uniqueData,data){
        return  this.CollData.updateOne(uniqueData,{$set:data})
        
    }

     delete(uniqueData){
        return  this.CollData.deleteOne(uniqueData)
        
    }

}

// let prodScheme={
//     name:String,
//     price:Number,
//     brand:String,
//     catg:String
//  };

//  let dbObj=new MongooseClass.DBmongooseClass('products --collection name--',prodScheme); 

module.exports.DBmongooseClass=DBmongooseClass;