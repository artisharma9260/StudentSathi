import { CreditCard, FileText, Award, GraduationCap, Briefcase, Phone } from 'lucide-react';

interface SectionCardProps {
  title: string;
  onClick?: () => void;
  category?: string;
}

const categoryColors = {
  document: 'from-blue-500 to-cyan-500',
  certificate: 'from-teal-500 to-cyan-500',
  scheme: 'from-green-500 to-emerald-500',
  skill: 'from-orange-500 to-yellow-500',
  academic: 'from-indigo-500 to-blue-500',
  default: 'from-blue-500 to-indigo-500'
};

const categoryIcons = {
  document: CreditCard,
  certificate: FileText,
  scheme: Award,
  skill: Briefcase,
  academic: GraduationCap,
  default: FileText
};

export default function SectionCard({ title, onClick, category = 'default' }: SectionCardProps) {
  const gradientColor = categoryColors[category as keyof typeof categoryColors] || categoryColors.default;
  const Icon = categoryIcons[category as keyof typeof categoryIcons] || categoryIcons.default;

  return (
    <div
      onClick={onClick}
      className={`flex-shrink-0 w-64 h-40 bg-gradient-to-br ${gradientColor} rounded-2xl hover:shadow-2xl transition-all cursor-pointer p-6 flex flex-col items-center justify-center group relative overflow-hidden transform hover:scale-105`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10 group-hover:scale-150 transition-transform"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-white drop-shadow-lg">{title}</h3>
      </div>
    </div>
  );
}