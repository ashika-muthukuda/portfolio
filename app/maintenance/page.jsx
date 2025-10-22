import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Clock, 
  Mail, 
  Github, 
  Linkedin,
  AlertTriangle
} from "lucide-react";

export default function Maintenance() {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center px-4 py-8">
      <ScrollAnimation>
        <Card className="border-0 gradient-bg-soft max-w-3xl mx-auto overflow-hidden">
          <CardContent className="p-8 md:p-12">
            {/* Main Content */}
            <div className="text-center space-y-8">
              {/* Maintenance Icon */}
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
                  <Wrench className="w-12 h-12 text-yellow-600 dark:text-yellow-500 animate-bounce" />
                </div>
              </div>

              {/* Title and Description */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Under <span className="gradient-text">Maintenance</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We&apos;re currently updating our website to bring you an even better experience.
                  Please check back soon!
                </p>
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 border-0">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  Site Maintenance
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-0">
                  <Clock className="w-4 h-4 mr-1" />
                  Expected Duration: 2 Hours
                </Badge>
              </div>

              {/* Progress Bar */}
              <div className="max-w-md mx-auto w-full space-y-2">
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[60%] rounded-full 
                    animate-pulse"></div>
                </div>
                <p className="text-sm text-muted-foreground">Maintenance Progress: 60%</p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Need to reach us?</h2>
                <div className="flex justify-center gap-4">
                  <a href="mailto:contact@example.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 
                    hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/yourusername" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 
                    hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 
                    hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Additional Information */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-muted-foreground">
                  We appreciate your patience as we work to improve our site. 
                  For urgent matters, please reach out via email.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </div>
  );
}