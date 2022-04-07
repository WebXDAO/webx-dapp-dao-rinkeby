import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
} from "@heroicons/react/solid";

export default function MemberList({ members }) {
  return (
    <div className="bg-white shadow-md overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {members.map((member, i) => (
          <li key={i}>
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 flex items-center">
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {member}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <div>
                      <p className="text-sm text-gray-900">
                        {/* Applied on <time dateTime={application.date}>{application.dateFull}</time> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
