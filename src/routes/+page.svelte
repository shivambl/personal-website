<script>
	import Link from '$lib/Link.svelte';
</script>

<p>
	👋 Hi! I'm Shivam. Welcome to my personal website.
	Here's my
	<Link href="/resume">resume</Link>,
	and you can contact me here —
	<Link href="mailto:shivam.bansal@live.com">email</Link>,
	<Link href="https://www.linkedin.com/in/shivambl" is_external>linkedin</Link>,
	<Link href="https://github.com/shivambl" is_external>github</Link>.
</p>

<h1 class="text-4xl pt-8 pb-4 font-bold">Work</h1>

<ul>
	<li class="pb-4">
		<span class="pr-2">July 2020</span>
		<Link href="https://github.com/shivambl/HomeQuarantine" is_external>Break the Chain</Link>
		<ul class="list-disc pl-8">
			<li>COVID-19 exposure tracker built in just 12 hours for a hackathon.</li>
			<li>Won the competition!</li>
		</ul>
	</li>

    <li class="pb-4">
		<span class="pr-2">March 2020</span>
		<Link href="https://github.com/shivambl/C-Compiler-to-MIPS" is_external>C Compiler for the MIPS instruction set</Link>
		<ul class="list-disc pl-8">
			<li>Compiles a subset of the C programming language.</li>
			<li>Output is tested on a MIPS simulator.</li>
		</ul>
	</li>

    <li class="pb-4">
		<span class="pr-2">February 2019</span>
		<Link href="https://github.com/shivambl/IITG-Leave-Sanction-System" is_external>Leave Application Portal</Link>
		<ul class="list-disc pl-8">
			<li>Manage leave approval, rejection recognising seniority relations.</li>
			<li>Send notifications to users of any activity on their own or their reports' leave applications.</li>
		</ul>
	</li>
</ul>
