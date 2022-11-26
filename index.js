var fileNames = [{name: `nithin.md`, content:`Hi i am nithin balaji. Student at SSN. I love coding. I am in my third year

![img](https://repository-images.githubusercontent.com/373582499/876f9800-c4be-11eb-9111-ecf555718c39)
`},] 

var converter = new showdown.Converter();
for (let i = 0; i < fileNames.length; i++) {
  fileNames[i].content = converter.makeHtml(fileNames[i].content);
}

const { useState, useEffect } = React;
const ReactAppFromCDN = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [windowTitle, setWindowTitle] = useState('');
  const [windowContent, setWindowContent] = useState('');

  let date = String(new Date());

  return (
    <div>
      {/* <img
        src="https://media.idownloadblog.com/wp-content/uploads/2021/06/macOS-Monterey-wallpaper-Light-2048x2048.jpg"
        alt="wallpaper"
        className="absolute top-0 left-0 h-screen w-full"
      /> */}
      <div className="h-screen w-full relative">
        <div className="bg-white/30 w-full h-7 backdrop-blur shadow flex justify-between items-center">
          <div>
            <img src="./assets/Menu Bar Menus.svg" alt="" />
          </div>
          <div className="flex gap-3 mr-5">
            <img src="./assets/Menu Bar Items.svg" alt="" />
            <div className="text-[15px] text-shadow-lg font-medium hidden md:block">
              {date.slice(0, 16)}{' '}
              <span className="ml-2">{date.slice(16, 21)}</span>
            </div>
          </div>
        </div>
        <div
          className="mx-10 my-10 flex flex-col flex-wrap gap-8 h-screen w-fit"
          id="files"
        >
          {fileNames.map((file, i) => {
            return (
              <button
                className="relative focus:bg-blue-500/60 hover:bg-blue-400/40 p-3 rounded-md flex flex-col justify-center items-center w-fit"
                key={i}
                id={`file${i}`}
                onClick={() => {
                  setShowWindow(true);
                  setWindowTitle(file.name);
                  setWindowContent(file.content);
                }}
              >
                <img
                  src="https://cdn.neowin.com/forum/uploads/monthly_04_2013/post-360412-0-09676400-1365986245.png"
                  width="60px"
                />
                <div
                  className="text-white text-sm text-shadow-lg w-16 overflow-hidden text-ellipsis"
                  title={file.name}
                >
                  {file.name}
                </div>
                <div className="text-2xl font-bold text-gray-400/40 absolute top-6">
                  {file.name.slice(0, 1)}
                </div>
              </button>
            );
          })}
        </div>
        <div
          className={` shadow-filter z-50 min-w-[250px] max-w-[40%] border-[1px] border-[#0000001F] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
            showWindow ? 'scale-100' : 'scale-0'
          } transition-all duration-200 ease-in-out`}
        >
          <div className="w-full h-7 bg-white rounded-t-xl border-b-[1px] border-[#0000001F] relative flex items-center justify-center">
            <div className="flex gap-2 items-center h-full absolute left-2">
              <button
                id="btn1"
                onClick={() => {
                  setShowWindow(false);
                }}
                className="rounded-full h-3.5 w-3.5 bg-[#FF5E57] hover:bg-red-600"
              ></button>
              <button
                onClick={() => {
                  setShowWindow(false);
                }}
                className="rounded-full h-3.5 w-3.5 bg-[#FFBB2E] hover:bg-yellow-600"
              ></button>
              <div className="rounded-full h-3.5 w-3.5 bg-[#38C149]"></div>
            </div>
            <div className="font-medium text-[14px]">{windowTitle}</div>
          </div>
          <div
            style={{ overflow: 'overlay' }}
            className="rounded-b-xl bg-[#F6F6F6] max-h-[60vh] p-6"
          >
            <div
              className="prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: windowContent }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));