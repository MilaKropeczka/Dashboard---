import React from 'react';

type ButtonProps = {
	text: string;
	className: string;
};

export default function Button({ text, className }: ButtonProps) {
	return <button className={`cursor-pointer ${className}`}>{text}</button>;
}
