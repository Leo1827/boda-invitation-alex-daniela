import ConfirmacionAsistencia from "@/components/ConfirmarAsistencia/ConfirmarAsistencia";
import DressCodeAndGifts from "@/components/DressCodeAndGifts/DressCodeAndGifts";
import EventDetails from "@/components/EventDetails/EventDetails";
import Invitation from "@/components/Invitation/Invitation";
import WeddingCountdown from "@/components/WeddingCountdown.tsx/WeddingCountdown";

export default function InvitationPage() {
  return (
    <main>
      <Invitation />
      <div className="colorBackground">
        <WeddingCountdown />
      </div>
      <EventDetails />
      <div className="colorBackground">
        <DressCodeAndGifts />

        
      </div>
      <div className="colorBackground spacingAsist">
        <ConfirmacionAsistencia />
      </div>
      
    </main>
  );
}