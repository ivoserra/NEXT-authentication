import { NextRequest, NextResponse } from 'next/server';

export const POST = async(request:NextRequest) =>{

    try{
        console.log('Request API POST request accessed Successfully')
        return NextResponse.json({
            message: "Users registered successfully",
            success: true,
        });

    } catch(error:any){
        return NextResponse.json({error: error.message}, { status: 500 })
    }
}