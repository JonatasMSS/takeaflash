import { SelectorItem } from "@/components/Selector";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


const fetchTags = async ({ email }: { email: string }) => {
    const tags = await prisma.tag.findMany({
      where: {
        User: {
          email,
        },
      },
    });
    const selectorItem: SelectorItem = tags.map((item) => {
      return {
        tagColor: item.color,
        text: item.name,
        value: item.name.toLocaleLowerCase(),
      };
    });
  
    return selectorItem;
  };

export async function GET(request:NextRequest){
    const {searchParams} = new URL(request.url)

    const email = searchParams.get('email')
    const selectorItem = await fetchTags({email:email!})

    return NextResponse.json(selectorItem)
}