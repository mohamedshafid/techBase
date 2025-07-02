import React from "react";

interface DetailsCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  info: string;
}

const DetailsCard = ({
  icon: Icon,
  title,
  description,
  info,
}: DetailsCardProps) => {
  return <div>DetailsCard</div>;
};

export default DetailsCard;
