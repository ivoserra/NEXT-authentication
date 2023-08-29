import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(request:NextRequest, response:NextResponse)=> {

    try{
        /* const queryParams = new URL(request.nextUrl)
        console.log(queryParams) */
        const { searchParams } = new URL(request.nextUrl)
        console.log(searchParams.get('user'))
        return NextResponse.json({
            message: "Users get Request access successfuly",
            data: {
                name: "john Doe",
                email: 'whateveremail'
            }
        })

    } catch (error:any){
        return NextResponse.json({error: error.message},{ status: 500 });
    }
}