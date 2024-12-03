"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme";
import { Github, Linkedin, Instagram, Send, Mail, User } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
	const socialLinks = [
		{
			href: "https://www.linkedin.com/in/egamberdi-ibrohimov-7430692b1/",
			Icon: Linkedin,
		},
		{
			href: "https://github.com/seniordotdev", // Add the actual GitHub link here
			Icon: Github,
		},
		{
			href: "https://t.me/seniordotdev", // Add the actual Send link here if necessary
			Icon: Send,
		},
		{
			href: "https://instagram.com/seniordotdev", // Add the actual Instagram link here
			Icon: Instagram,
		},
	];
	return (
		<main className="center h-[100vh]">
			<Card className="w-full max-w-md relative">
				<CardContent className="pt-6">
					<div className="absolute top-4 right-4">
						<ModeToggle />
					</div>
					<div className="flex flex-col items-center space-y-4">
						<Avatar className="w-24 h-24">
							<AvatarImage src="/logo.jpg" alt="Profile Picture" />
							<AvatarFallback>EI</AvatarFallback>
						</Avatar>
						<h1 className="text-2xl font-bold">Egamberdi Ibrohimov</h1>
						<p className="text-muted-foreground flex">
							<User className="h-4 w-4 relative top-1" />
							Web Developer
						</p>
						<a
							href="mailto:mail@seniordotdev.uz"
							className="flex items-end text-sm text-muted-foreground hover:underline "
						>
							<Mail className="h-4 w-4 mr-1" />
							mail@seniordotdev.uz
						</a>
						<div className="flex space-x-2">
							{socialLinks.map(({ href, Icon }, index) => (
								<Button key={index} variant="ghost" size="icon">
									<Link href={href} target={href ? "_blank" : undefined}>
										<Icon className="h-10 w-10" />
									</Link>
								</Button>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
