import { Users, Quote, Sparkles, Handshake } from "lucide-react";

const CooperativeVision = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white dark:bg-gray-600 rounded-lg shadow-xl p-4 sm:p-6 overflow-hidden">
          <Quote className="absolute top-2 left-2 text-blue-100 w-6 h-6 sm:w-8 sm:h-8" />
          <div className="absolute bottom-0 right-0 text-orange-100 w-12 h-12 sm:w-16 sm:h-16">
            <Sparkles className="w-full h-full" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Handshake
              className="w-3/5 h-3/5 text-blue-200 opacity-40 dark:text-gray-400"
              strokeWidth={0.5}
            />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <Users className="text-coopBlue w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              <h2 className="text-xs sm:text-2xl font-bold text-gray-800 dark:text-gray-300 font-['Open Sans']">
                Working Together for a Better Tomorrow
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed dark:text-gray-300 mb-2 font-['Open Sans']">
              <em>
                &quot;The key to overcoming poverty lies in the power of
                cooperation and cooperatives&quot;
              </em>
              , as envisioned by{" "}
              <span className="font-semibold text-coopOrange dark:text-coopOrange">
                Obbo Haile Gebre Lube
              </span>
              , the founding father of CoopBank. He recognized the struggles and
              neglect faced by rural and underprivileged communities.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 font-['Open Sans'] dark:text-gray-300">
              Inspired by his vision, we believe that{" "}
              <em>a better tomorrow for our community</em> rests in the hands of
              young innovators from these very communities. That&apos;s why we
              are committed to <strong>cooperating</strong> with them to{" "}
              <em>transform lives and create lasting change</em>.
            </p>
            <div className="flex justify-end">
              <div className="bg-orange-100 text-orange-800 text-xs sm:text-sm font-semibold py-1 px-2 sm:py-1.5 sm:px-3 rounded-full inline-block font-['Open Sans'] shadow-md">
                Transforming Lives Through Cooperation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CooperativeVision;
