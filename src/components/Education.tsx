import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/educationData';

const TimelineDot = () => (
  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full mt-8 -ml-1.5 border border-white dark:border-gray-900" />
);

export default function Education() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 ml-6">
              <TimelineDot />
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl font-semibold flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 shrink-0" />
                        {edu.degree}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {edu.school}
                        {edu.location && ` · ${edu.location}`}
                      </p>
                    </div>
                    <Badge variant="secondary" className="whitespace-nowrap">
                      {edu.dates}
                    </Badge>
                  </div>

                  {(edu.honors?.length || edu.gpa) && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.honors?.map((honor) => (
                        <Badge key={honor}>{honor}</Badge>
                      ))}
                      {edu.gpa && <Badge variant="outline">GPA {edu.gpa}</Badge>}
                    </div>
                  )}
                </CardHeader>

                {edu.details && edu.details.length > 0 && (
                  <CardContent>
                    <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                      {edu.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}