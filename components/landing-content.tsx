"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [{
    name:"John Doe",
    avatar: "J",
    title: "Software Engineer",
    description: "I have been using this tool for a while now and it has been a great experience. I have been able to generate content for my projects in seconds."
},
{
    name: "Jane Smith",
    avatar: "J",
    title: "Product Manager",
    description: "This tool has significantly improved our workflow. We are now able to produce content much faster, which has led to an increase in productivity."
},
{
    name: "Bob Johnson",
    avatar: "B",
    title: "Data Analyst",
    description: "The tool's ability to generate content quickly and accurately has been a game changer for our team. We can now focus more on analysis and less on content creation."
},
{
    name: "Alice Williams",
    avatar: "A",
    title: "UX Designer",
    description: "I love how easy it is to use this tool. It has made content generation a breeze and has saved me a lot of time."
}
];

export const LandingContent = () => {
    return (
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <Card key={item.description} className="bg-[#192339] border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg ">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">{item.description}</CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  };