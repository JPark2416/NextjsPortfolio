import Link from "next/link";
import Animation from "../animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요
        </h1>
        <p className="mb-6 leading-relaxed">
          모든 국민은 거주·이전의 자유를 가진다. 대통령으로 선거될 수 있는 자는
          국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다. 대통령은
          제3항과 제4항의 사유를 지체없이 공포하여야 한다. 헌법재판소의 조직과
          운영 기타 필요한 사항은 법률로 정한다. 명령·규칙 또는 처분이 헌법이나
          법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를
          최종적으로 심사할 권한을 가진다.
        </p>
        <div className="flex justify-center">
          <Link legacyBehavior href={"/projects"}>
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
