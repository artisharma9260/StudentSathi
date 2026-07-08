import { Phone, Shield, AlertCircle, Globe } from 'lucide-react';

interface EmergencyCardProps {
  title: string;
  contact: string;
  type: 'phone' | 'safety' | 'mental' | 'cyber';
}

export default function EmergencyCard({ title, contact, type }: EmergencyCardProps) {
  const icons = {
    phone: Phone,
    safety: Shield,
    mental: AlertCircle,
    cyber: Globe
  };

  const Icon = icons[type];

  return (
    <div className="flex-shrink-0 w-64 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl hover:shadow-2xl transition-all cursor-pointer p-6 group relative overflow-hidden transform hover:scale-105">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10 group-hover:scale-150 transition-transform"></div>
      
      <div className="flex flex-col items-center text-center space-y-3 relative z-10">
        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h4 className="text-white drop-shadow-lg">{title}</h4>
        <p className="text-white/90 drop-shadow-md">{contact}</p>
      </div>
    </div>
  );
}