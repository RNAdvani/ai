import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Graph, { GraphData } from "./Chart";

export function CardWithForm({children,title,description}:{title:string,description:string,children:React.ReactElement}) {
  const data: GraphData = {
  labels: ['1', '2', '3', '4', '5'], // Replace with your actual labels
  data: [20, 30, 45, 25, 38], // Replace with your actual data
};


  return (
    <Card className="w-[400px]  h-[50vh] max-md:border-0">
      <CardHeader>
        <CardTitle className="max-md:text-center">{title}</CardTitle>
        <CardDescription  className="max-md:text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="min-h-[30vh] p-0 w-full">
        {children}
      </CardContent>
      {/* <CardFooter className="flex justify-between">
      </CardFooter> */}
    </Card>
  )
}
