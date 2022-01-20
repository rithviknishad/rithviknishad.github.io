let runCode = () => {
  let console = {
    log: (val) => {
      let paragraph = document.getElementById("console");
      paragraph.appendChild(document.createTextNode(val));
      paragraph.appendChild(document.createElement("br"));
    },
  };

  ((me) => {
    console.log(`I am ${me.name}`);
    console.log(`My hobbies are ${me.hobbies.join(", ")}`);
    console.log(`I am currently pursuing my ${me.pursuing}`);
  })({
    name: `Rithvik Nishad`,
    hobbies: [`programming 🖥️`, `thinking 🧠`, `eating 🍲`, `sleeping 😴`],
    pursuing: `3rd year B. Tech. 
      Electrical & Electronics Engineering 
      @Vellore Institute of Technology, Chennai`,
  });
};

let highlightedCodeHtml = `<p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>(</span><em><span style='font-family:"JetBrains Mono";color:#D4BFFF;'>me</span></em><span style='font-family:"JetBrains Mono";color:#DADBC0;'>)&nbsp;</span><span style='font-family:"JetBrains Mono";color:#F07178;'>=&gt;</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;{</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp; console</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#FFCC66;'>log</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`I am&nbsp;</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>\${</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>me</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>name</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>}</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>;</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp; console</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#FFCC66;'>log</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`My hobbies are&nbsp;</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>\${</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>me</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>hobbies</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#FFCC66;'>join</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>&quot;, &quot;</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>}</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>;</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp; console</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#FFCC66;'>log</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`I am currently pursuing my&nbsp;</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>\${</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>me</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>pursuing</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>}</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>;</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>}</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)(</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>{</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;&nbsp;</span><em><span style='font-family:"JetBrains Mono";color:#FFB454;'>name</span></em><em><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>:</span></em><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`Rithvik Nishad\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;&nbsp;</span><em><span style='font-family:"JetBrains Mono";color:#FFB454;'>hobbies</span></em><em><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>:</span></em><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>[</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`programming&nbsp;</span><span style='font-family:"Segoe UI Symbol",sans-serif;color:#C2D94C;'>🖥</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>️\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`thinking 🧠\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`eating&nbsp;</span><span style='font-family:"Segoe UI Symbol",sans-serif;color:#C2D94C;'>🍲</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`sleeping&nbsp;</span><span style='font-family:"Segoe UI Symbol",sans-serif;color:#C2D94C;'>😴</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>]</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;&nbsp;</span><em><span style='font-family:"JetBrains Mono";color:#FFB454;'>pursuing</span></em><em><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>:</span></em><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`3rd year B. Tech.&nbsp;</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#C2D94C;'>&nbsp; &nbsp; Electrical &amp; Electronics Engineering&nbsp;</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#C2D94C;'>&nbsp; &nbsp; @Vellore Institute of Technology, Chennai\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span></p>
  <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>}</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>;</span></p>`;

// let highlightedCodeHtml = `<p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>(</span><em><span style='font-family:"JetBrains Mono";color:#D4BFFF;'>me</span></em><span style='font-family:"JetBrains Mono";color:#DADBC0;'>)&nbsp;</span><span style='font-family:"JetBrains Mono";color:#F07178;'>=&gt;</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;{</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp; console</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#FFCC66;'>log</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`I am&nbsp;</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>\${</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>me</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>name</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>}</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>;</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp; console</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#FFCC66;'>log</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`My hobbies are&nbsp;</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>\${</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>me</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>hobbies</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#FFCC66;'>join</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>&quot;, &quot;</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>}</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>;</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp; console</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#FFCC66;'>log</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>(</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`I am currently pursuing my&nbsp;</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>\${</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>me</span><span style='font-family:"JetBrains Mono";color:#F29E74;'>.</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>pursuing</span><span style='font-family:"JetBrains Mono";color:#FFA759;'>}</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>;</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>}</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)(</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>{</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;&nbsp;</span><em><span style='font-family:"JetBrains Mono";color:#FFB454;'>name</span></em><em><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>:</span></em><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`Rithvik Nishad\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;&nbsp;</span><em><span style='font-family:"JetBrains Mono";color:#FFB454;'>hobbies</span></em><em><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>:</span></em><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>[</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`programming&nbsp;</span><span style='font-family:"Segoe UI Symbol",sans-serif;color:#C2D94C;'>🖥</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>️\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`thinking 🧠\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`eating&nbsp;</span><span style='font-family:"Segoe UI Symbol",sans-serif;color:#C2D94C;'>🍲</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`sleeping&nbsp;</span><span style='font-family:"Segoe UI Symbol",sans-serif;color:#C2D94C;'>😴</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>]</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;&nbsp;</span><em><span style='font-family:"JetBrains Mono";color:#FFB454;'>pursuing</span></em><em><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>:</span></em><span style='font-family:"JetBrains Mono";color:#DADBC0;'>&nbsp;</span><span style='font-family:"JetBrains Mono";color:#C2D94C;'>\`3rd year B. Tech.&nbsp;</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#C2D94C;'>&nbsp; &nbsp; Electrical &amp; Electronics Engineering&nbsp;</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#C2D94C;'>&nbsp; &nbsp; @Vellore Institute of Technology, Chennai\`</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>,</span></p>
//   <p style='margin:0cm;margin-bottom:.0001pt;font-size:16px;font-family:"Times New Roman",serif;line-height:16.5pt;background:#080C11;'><span style='font-family:"JetBrains Mono";color:#DADBC0;'>}</span><span style='font-family:"JetBrains Mono";color:#B3B1AD;'>)</span><span style='font-family:"JetBrains Mono";color:#CBCCC6;'>;</span></p>`;

document.getElementById("highlighted-code").innerHTML = highlightedCodeHtml;
