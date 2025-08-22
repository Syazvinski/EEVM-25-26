import React, { useState, useRef } from "react";
import { ChevronDown, Users } from "lucide-react";
import { Member, Unit, leadershipTeam, allDirectors, unitsData } from "../data/teamData";

interface TeamPageProps {
  setCurrentPage: (page: string) => void;
}

// Leadership Card Component
// NOTE: For optimal display, ensure all leadership headshots are pre-cropped to a consistent aspect ratio and head size/position.
const LeadershipCard: React.FC<{ member: Member }> = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
      {!imageError ? (
        <img 
          src={member.imagePath} 
          alt={member.name} 
          className="w-56 h-64 rounded-lg mx-auto mb-4 object-cover border-2 border-gray-200"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-56 h-64 rounded-lg mx-auto mb-4 bg-[#3CB5C4] border-2 border-gray-200 flex items-center justify-center">
          <div className="text-4xl font-bold text-white">
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      )}
      <h3 className="font-bold text-xl text-gray-900 mb-2">{member.name}</h3>
      <p className="text-[#3CB5C4] text-lg font-semibold mb-3">{member.title}</p>
      {member.email && (
        <a href={`mailto:${member.email}`} className="text-sm text-gray-500 hover:text-[#01FDC0] transition-colors">
          {member.email}
        </a>
      )}
    </div>
  );
};

// Director Card Component
// NOTE: For optimal display, ensure all director headshots are pre-cropped to a consistent aspect ratio and head size/position.
const DirectorCard: React.FC<{ member: Member }> = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="text-center">
      {!imageError ? (
        <img 
          src={member.imagePath} 
          alt={member.name} 
          className="w-40 h-44 rounded-lg mx-auto mb-3 object-cover border-2 border-gray-200"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-40 h-44 rounded-lg mx-auto mb-3 bg-[#3CB5C4] border-2 border-gray-200 flex items-center justify-center">
          <div className="text-xl font-bold text-white">
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      )}
      <h4 className="font-semibold text-sm text-gray-900 mb-1">{member.name}</h4>
      <p className="text-xs text-[#3CB5C4]">{member.title.replace('Director of ', '').replace('Co-Director of ', '')}</p>
    </div>
  );
};

// Division Card Component
const DivisionCard: React.FC<{ 
  unit: Unit, 
  isSelected: boolean, 
  onClick: () => void 
}> = ({ unit, isSelected, onClick }) => {
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-sm border cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isSelected ? 'border-[#3CB5C4] shadow-md' : 'border-gray-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{unit.name}</h3>
        </div>
        <span className="text-xs text-gray-500">{unit.type}</span>
      </div>
      
      {/* Directors Layout */}
      <div className="mb-4">
        {unit.directors.length === 1 ? (
          <div className="flex justify-center">
            <DirectorCard member={unit.directors[0]} />
          </div>
        ) : unit.directors.length === 2 ? (
          <div className="grid grid-cols-2 gap-4">
            {unit.directors.map(director => (
              <DirectorCard key={director.name} member={director} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {unit.directors.map(director => (
              <DirectorCard key={director.name} member={director} />
            ))}
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{unit.associates.length} team members</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
      </div>
    </div>
  );
};

// Team Member Card for Details Panel (Directors only)
// NOTE: For optimal display, ensure all team member headshots are pre-cropped to a consistent aspect ratio and head size/position.
const TeamMemberCard: React.FC<{ member: Member }> = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="bg-gray-50 p-4 rounded-lg text-center">
      {!imageError ? (
        <img 
          src={member.imagePath} 
          alt={member.name} 
          className="w-28 h-32 rounded-lg mx-auto mb-3 object-cover border-2 border-gray-200"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-28 h-32 rounded-lg mx-auto mb-3 bg-[#3CB5C4] border-2 border-gray-200 flex items-center justify-center">
          <div className="text-lg font-bold text-white">
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      )}
      <h5 className="font-semibold text-gray-800 mb-1 text-sm">{member.name}</h5>
      <p className="text-[#3CB5C4] text-xs mb-1">{member.title}</p>
      {member.email && (
        <a href={`mailto:${member.email}`} className="text-xs text-gray-500 hover:text-[#01FDC0] transition-colors break-all">
          {member.email}
        </a>
      )}
    </div>
  );
};

// Team Member Name Component (Associates - no image)
const TeamMemberName: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div className="bg-gray-50 p-3 rounded-lg text-center">
      <h5 className="font-semibold text-gray-800 mb-1 text-sm">{member.name}</h5>
      <p className="text-gray-500 text-xs mb-1">{member.title}</p>
      {member.email && (
        <a href={`mailto:${member.email}`} className="text-xs text-[#3CB5C4] hover:text-[#01FDC0] transition-colors break-all">
          {member.email}
        </a>
      )}
    </div>
  );
};

// Dynamic Details Panel
const DivisionDetails: React.FC<{ unit: Unit | null }> = ({ unit }) => {
  if (!unit) {
    return (
      <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 text-center">
        <Users size={48} className="text-[#3CB5C4] mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Organization</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Click on any division or initiative above to learn more about their team, responsibilities, and current members.
        </p>
        <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#3CB5C4] mb-2">5</div>
            <div className="text-gray-600">Divisions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#3CB5C4] mb-2">3</div>
            <div className="text-gray-600">Initiatives</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          <h3 className="text-3xl font-bold text-[#3CB5C4] mr-3">{unit.name}</h3>
          <span className="text-sm text-gray-500">{unit.type}</span>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">{unit.description}</p>
      </div>

      {unit.groupImagePath && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <img src={unit.groupImagePath} alt={`${unit.name} group photo`} className="w-full h-64 object-cover" />
        </div>
      )}

      {unit.skills && unit.skills.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Key Skills & Focus Areas</h4> 
          <div className="flex flex-wrap justify-center gap-2">
            {unit.skills.map(skill => (
              <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12">
        {/* Leadership Team */}
        {unit.directors.length > 0 && (
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-6">Leadership Team</h4> 
            <div className={`grid ${unit.directors.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
              {unit.directors.map(director => (
                <TeamMemberCard key={director.name} member={director} />
              ))}
            </div>
          </div>
        )}
        
        {/* Team Members */}
        {unit.associates.length > 0 && (
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-6">Team Members</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {unit.associates.map(associate => (
                <TeamMemberName key={associate.name} member={associate} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TeamPage: React.FC<TeamPageProps> = ({ setCurrentPage }) => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleUnitClick = (unit: Unit) => {
    setSelectedUnit(selectedUnit?.id === unit.id ? null : unit);
    
    // Scroll to details section after a brief delay
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <div className="py-20 bg-gray-100"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals driving entrepreneurship innovation at Emory University
          </p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Executive Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <LeadershipCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Division Grid */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Divisions & Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitsData.map((unit) => (
              <DivisionCard 
                key={unit.id}
                unit={unit} 
                isSelected={selectedUnit?.id === unit.id}
                onClick={() => handleUnitClick(unit)}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Details Section */}
        <div ref={detailsRef}>
          <DivisionDetails unit={selectedUnit} />
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Team?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students who want to make a difference in the entrepreneurship community at Emory.
            </p>
            <button
              onClick={() => setCurrentPage("applications")}
              className="bg-[#3CB5C4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#01FDC0] transition-colors duration-300 text-lg"
            >
              Apply to Join EEVM
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamPage;