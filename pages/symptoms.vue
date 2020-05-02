<template>
  <div class="p-3 mt-3 sm:mt-0 sm:py-8 sm:px-6 md:px-12">
    <div class="mb-8 text-black">
      <p class="text-xs font-semibold select-none">
        <n-link to="/"><span class="mr-1 cursor-pointer hover:underline text-black">Home</span></n-link>
        <span>/</span>
        <span class="ml-1 text-black">Symptoms</span>
      </p>
    </div>
    <div class="mb-6">
      <h1 class="text-black text-2xl sm:text-4xl font-semibold">Symptoms</h1>
    </div>
    <div class="bg-white rounded-card shadow-md">
      <div class="p-3 py-4 sm:p-10 sm:py-6">
        <h1 class="text-black text-base font-semibold leading-relaxed">COVID-19 affects different people in different ways. Most infected people will develop mild to moderate symptoms.</h1>
      </div>
      <div class="hr bg-grey-100 w-full"></div>
      <div class="p-3 py-4 sm:p-10 sm:py-6 relative overflow-hidden">
        <svg class="icon-overlay fill-grey-50 absolute z-1" xmlns="http://www.w3.org/2000/svg" width="46.791" height="47.093" viewBox="0 0 46.791 47.093"><path d="M19.423,43.6a3.468,3.468,0,0,1,1.368-2.757l.077-4.382a13.269,13.269,0,0,1-7.905-4.334l-5.9,6.249A3.51,3.51,0,0,1,3.532,41.86a3.488,3.488,0,1,1,0-6.976,3.59,3.59,0,0,1,.728.074l6.333-6.709a12.886,12.886,0,0,1-.87-4.163L4.816,20.692a3.559,3.559,0,0,1-1.284.238,3.489,3.489,0,1,1,0-6.977,3.519,3.519,0,0,1,3.488,2.94l3.419,2.365a13.212,13.212,0,0,1,9.555-8.465l-.08-4.544A3.468,3.468,0,0,1,18.54,3.488a3.531,3.531,0,0,1,7.062,0,3.465,3.465,0,0,1-1.275,2.684l.077,4.37a13.268,13.268,0,0,1,7.758,3.6l7.659-8.114a3.46,3.46,0,0,1-.093-.8,3.531,3.531,0,1,1,3.59,3.488l-8.5,9.005a12.982,12.982,0,0,1,.8,9.65l5.2,4.956a3.593,3.593,0,0,1,.677-.064,3.488,3.488,0,1,1-3.531,3.488c0-.028,0-.056,0-.083L33.52,31.434a13.266,13.266,0,0,1-8.237,4.992l-.079,4.49A3.465,3.465,0,0,1,26.485,43.6a3.531,3.531,0,0,1-7.062,0Z"/></svg>
        <div class="relative z-2">
          <div class="mb-6">
            <h1 class="text-black text-base font-semibold mb-3">Common symptoms:</h1>
            <ul class="list-disc ml-6">
              <li class="text-black leading-relaxed text-sm mb-1">Fever</li>
              <li class="text-black leading-relaxed text-sm mb-1">Tiredness</li>
              <li class="text-black leading-relaxed text-sm mb-1">Dry Cough</li>
            </ul>
          </div>
          <div class="mb-6">
            <h1 class="text-black text-base font-semibold mb-3">Some people may experience:</h1>
            <ul class="list-disc ml-6">
              <li class="text-black leading-relaxed text-sm mb-1">Aches And Pains</li>
              <li class="text-black leading-relaxed text-sm mb-1">Nasal Congestion</li>
              <li class="text-black leading-relaxed text-sm mb-1">Runny Nose</li>
              <li class="text-black leading-relaxed text-sm mb-1">Sore Throat</li>
              <li class="text-black leading-relaxed text-sm mb-1">Diarrhoea</li>
            </ul>
          </div>
          <p class="text-black text-sm mb-3 leading-relaxed">On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</p>
          <p class="text-black text-sm mb-4 leading-relaxed">People with mild symptoms who are otherwise healthy should self-isolate. Seek medical attention if you have a fever, a cough, and difficulty breathing. Call ahead.</p>
          <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=symptoms" target="_blank" class="decoration-none text-xs border border-black rounded-full px-3 py-1 sm:px-4 sm:py-2 my-3 inline-block">Learn more on who.int</a>
          <p class="text-grey-200 text-xs2 mb-3 mt-5">For informational purposes only. Consult your local medical authority for advice.<br>Source: <a href="https://www.who.int/" target="_blank" class="text-grey-200 hover:underline">World Health Organization</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Symptoms of Coronavirus',
    meta: [
      { name: 'keywords', content: 'psymptoms of coronavirus, the coronavirus symptoms, symptoms of the coronavirus, corona symptoms, coronavirus virus symptoms, symptoms for coronavirus, corona virus symptoms, what are coronavirus symptoms, what are the coronavirus symptoms, what are the symptoms of coronavirus, coronavirus symptoms 2020, symptoms of corona, what is coronavirus, covid 19 symptoms, what is coronavirus symptoms' }
    ],
  }
}
</script>

<style>
  .hr {
    height: 1px;
  }
  
  .icon-overlay {
    top: 50%;
    right: -45%;
    transform: translateY(-50%);
    width: 98%;
    height: 98%;
  }
</style>