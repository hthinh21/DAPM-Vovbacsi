import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "../style/capcuu.css";

const ChiTietCapCuu = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sosId = queryParams.get("sos_id");

  const capCuuData = {
    1: {
      title: "Cấp cứu bệnh nhân tai biến mạch máu não.",
      content: (
        <>
          <p style={{ fontSize: "14px" }}>
            Tai biến mạch máu não hay còn gọi là đột quỵ, xảy ra khi mạch máu
            cung cấp oxy cho não bị vỡ hoặc một phần não bộ không nhận đủ lưu
            lượng máu cần thiết. Các tế bào thần kinh bị thiếu oxy sẽ bị chết
            trong vài phút. Ảnh hưởng của chấn thương do tai biến mạch máu não
            thường là vĩnh viễn vì các tế bào não không được thay thế.
            <br />
            Tai biến mạch máu não thường xảy ra nhanh, hay bị ở người già, cao
            huyết áp, người có tiền sử đau tiền đình, rối loạn thần kinh, chức
            năng suy giảm, hay từng bị tai biến nhẹ. Khi thấy người bệnh có dấu
            hiệu mất kiểm soát, chân tay không hoạt động, trúng gió giật méo
            miệng hay do thay đổi nhiệt độ đột ngột, huyết áp tăng vọt hoặc sau
            cơn say rượu... thì cần phải hết sức chú ý, quan tâm, sơ cứu tai
            biến kịp thời.
            <br />
            Các bước sơ cứu tai biến mạch máu não bằng việc chích máu:
            <br />
            - Đặt bệnh nhân nằm xuống nhẹ nhàng, giữ bình tĩnh, đừng cuống quít.
            <br />
            - Không được di chuyển người bệnh. Vì nếu nạn nhân bị di chuyển, các
            tia huyết quản trong não bộ sẽ vỡ ra gây nên tình trạng xuất huyết.
            <br />
            - Lấy một ống tiêm thuốc, nếu không thì một cây kim may, hay một cây
            kim gúc sạch. Trước hết hơ nóng kim bằng lửa (bật lửa, đèn nến) để
            sát trùng, rồi dùng kim để chích trên 10 đầu ngón tay. Không cần tìm
            một huyệt đặc biệt nào cả, chỉ cần chích vào đầu ngón tay, cách móng
            tay một ly (mm). Chích kim vào cho đến khi có máu rỉ ra. Nếu máu
            không chảy, nên nặn đầu ngón tay cho đến khi thấy máu nhỏ giọt.
            <br />
            - Khi máu đã chảy từ cả 10 đầu ngón tay, thì chờ vài phút, bệnh nhân
            sẽ tỉnh dậy.
            <br />
            - Nếu mồm bệnh nhân bị méo, thì chúng ta phải nắm hai tai của bệnh
            nhân kéo mạnh, cho đến khi hai tai đều ửng màu đỏ. Chích vào dái tai
            hai mũi kim mỗi bên, cho đến khi máu nhỏ giọt từ mỗi dái tai. Sau
            vài phút, bệnh nhân sẽ tỉnh lại.
            <br />
            Những đầu ngón tay là vị trí của Thập tuyên huyệt, nơi tập trung
            nhiều đầu dây thần kinh rất nhạy cảm. Theo thuyết phản xạ thần kinh
            cũng như thuyết toàn đồ, khi bị tai biến mạch máu não, đầu ngón tay
            tương ứng với phần đầu của cơ thể và đỉnh nhọn của ngón tay ứng với
            huyệt Bách hội ở đỉnh đầu.
            <br />
            Xử trí tai biến mạch máu não bằng việc chích máu được áp dụng cách
            đây đã lâu và chỉ có hiệu quả trong một số trường hợp (do tăng huyết
            áp), còn với những nguyên nhân khác thì có khi còn làm bệnh tiến
            triển nặng nề hơn (tai biến do tắc mạch).
            <br />
            Đối với người bị tai biến mạch máu não, thời gian là vàng, mạch máu
            đông hoặc vỡ phải được xử lý thật nhanh để đề phòng các biến chứng
            như liệt toàn thân, bại não… Vì vậy, không được tự điều trị cho bệnh
            nhân dù chỉ là các động tác như bấm huyệt nhân trung, châm cứu, đánh
            gió... có thể vô tình làm tình trạng bệnh trầm trọng hơn.
            <br />
            Những việc cần làm khi có người bị tai biến mạch máu não như sau:
            <br />- Gọi xe cấp cứu tới, cố gắng liên hệ với bác sĩ thần kinh để
            được tư vấn sớm trước khi đưa bệnh nhân đến bệnh viện.
          </p>
        </>
      ),
      videoUrl: "https://youtu.be/0q0r1TPiJcw",
    },
    2: {
      title: "Cấp cứu bệnh nhân sốc phản vệ do dị ứng thuốc",
      content: (
        <>
          <h2>
            <span style={{ fontSize: "16px" }}>
              Phác đồ cấp cứu sốc phản vệ
            </span>
          </h2>

          <p>
            <span style={{ fontSize: "16px" }}>Triệu chứng:</span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Ngay sau khi tiếp xúc với dị nguyên hoặc muộn hơn, xuất hiện:
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Cảm giác khác thường (bồn chồn, hốt hoảng, sợ hãi...), tiếp đó
              xuất hiện triệu chứng ở một hoặc nhiều cơ quan.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Mẩn ngứa, ban đỏ, mày đay, phù Quincke.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Mạch nhanh nhỏ khó bắt, huyết áp tụt, có khi không đo được.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Khó thở (kiểu hen, khó thở thanh quản), nghẹt thở.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Đau quặn bụng, ỉa đái không tự chủ.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Đau đầu, chóng mặt, đôi khi hôn mê.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Choáng váng, vật vã, giãy giụa, co giật.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              Xử trí ngay tại chỗ:
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Ngừng ngay đường tiếp xúc với dị nguyên (thuốc đang dùng tiêm,
              uống, bôi, nhỏ mắt, mũi).
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>Cho bệnh nhân nằm tại chỗ.</span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Thuốc: adrenalin là thuốc cơ bản để chống sốc phản vệ.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Adrenalin dung dịch 1/1.000 ốhg lml = 1mg, tiêm dưới da, tiêm bắp
              ngay sau khi xuất hiện sốc phản vệ với liều như sau:
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>+ 1/2-1 ống ở người lớn</span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              + Ở trẻ em cần pha loãng (1/10) ốhg lml (1mg) + 9 ml nước cất =
              10ml sau đó tiêm 0,1ml/kg, không quá 0,3mg. (Liều: adrenalin
              0,01mg/kg cho cả trẻ em lẫn người lớn).
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Tiếp tục tiêm adrenalin liều như trên 10-15 phút/lần cho đến khi
              huyết áp trở lại bình thường.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Ủ ấm, đầu thấp chân cao, theo dõi huyết áp 10-15 phút/lần (nằm
              nghiêng nếu có nôn).
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Nếu sốc quá nặng đe doạ tử vong, ngoài đường tiêm dưới da có thể
              tiêm adrenalin 1mg dung dịch 1/10.000 (pha loãng 1/10) qua tĩnh
              mạch, bơm qua ống nội khí quản hoặc bơm qua màng nhẫn giáp.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Uống than hoạt (liều đầu 5g ở trẻ em, 20g ở người lớn).
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <strong>Tùy theo điều kiện có thể áp dụng:</strong>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <em>Xử trí suy hô hấp:</em>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Tuỳ theo tình huống và mức độ khó thở có thể sử dụng cốc biện pháp
              sau đây:
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>Thở oxy mũi - thổi ngạt.</span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>Bóp bóng Ambu có oxy.</span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Đặt ông nội khí quản, thông khí nhân tạo. Mở khí quản nếu có phù
              thanh môn.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Truyền tĩnh mạch chậm: aminophyllin 1 mg/kg/giờ hoặc terbutalin
              0,2 µg/kg/phút.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <em>Có thể dùng:</em>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Terbutalin 0,5mg, 1 ống dưới da ở người lớn và 0,2mg/10kg ở trẻ
              em. Tiêm lại sau 6 - 8 giờ nếu không đỡ khó thở.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Xịt họng terbutalin, salbutamol mỗi lần 2 nhát bóp, 4-5 lần trong
              ngày.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Thiết lập một đường truyền tĩnh mạch adrenalin để duy trì huyết
              áp: bắt đầu bằng 0,1-0,4 µg/kg/phút điều chỉnh tốc độ theo huyết
              áp (khoảng 2mg adrenalin /giờ cho người lớn 55 kg).
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <em>Các thuốc khác:</em>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Methylprednisolon 1mg/kg/4 giờ hoặc hydrocortison hemisuccinat
              5mg/kg/4 giờ tiêm tĩnh mạch hoặc tiêm bắp (có thể tiêm bắp ở tuyên
              cơ sở). Dùng liều cao hơn nếu sốc nặng (gấp 2 - 5 lần).
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Natrichlorua 0,9% 1 - 2 lít ở người lớn, không quá 20 ml/kg ở trẻ
              em mỗi lần.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Promethazin 0,5 - 1mg/kg tiêm bắp hoặc tĩnh mạch.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <em>Điều trị phối hợp:</em>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Uống than hoạt 1g/kg nếu dị nguyên qua đường tiêu hoá.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Băng ép chi phía trên chỗ tiêm hoặc đường vào của nọc độc, nếu có
              thể.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <strong>Chú ý:</strong>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Theo dõi bệnh nhân ít nhất 24 giờ sau khi huyết áp đã ổn định.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Sau khi sơ cứu nên tận dụng đường tiêm tĩnh mạch đùi (vì tĩnh mạch
              to, nằm phía trong động mạch đùi, dễ tìm).
            </span>
          </p>
        </>
      ),
      videoUrl: "",
    },
    3: {
      title: "Cấp cứu người bị đột quỵ",
      content: (
        <>
          <h2>
            <span style={{ fontSize: "16px" }}>Cấp cứu người bị đột quỵ</span>
          </h2>

          <p>
            <span style={{ fontSize: "16px" }}>
              <em>
                Đột quỵ là một biến chứng nguy hiểm của bệnh tim mạch. Cần cấp
                cứu người bị đột quỵ đúng cách để cứu sống họ.
              </em>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Đột quỵ là sự ngưng trệ đột ngột dòng máu cung cấp cho mão. Phần
              lớn là do đột ngột tắc động mạch nuôi não. Đó là đột quỵ nhồi máu.
              Các nguyên nhân khác gây đột quỵ là do chảy máu vào mô não khi
              mạch máu bị vỡ. Đó là đột quỵ xuất huyết.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <em>Đưa vào bệnh viện để cấp cứu người bị đột quỵ</em>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Đột quỵ vô cùng nguy hiểm vì nó diễn biến rất nhanh dù trước đó
              gần như không có triệu chứng gì rõ rệt. Mức độ nguy hiểm của đột
              quỵ phụ thuộc vào mức độ tổn thương của não. Từ đó, người bị đột
              quỵ có thể bị yếu, liệt, mất cảm giác, khó nói năng, khó đi lại,
              giảm thị lực, hay nghiêm trọng hơn khi không cấp cứu người bị đột
              quỵ kịp thời, họ có thể tử vong.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <strong>Cấp cứu người bị đột quỵ</strong> cần tuân thủ những
              nguyên tắc như sau: gọi ngay xe cấp cứu khi phát hiện người bị đột
              quỵ, áp dụng các phương pháp sơ cứu cho bệnh nhân trước khi đưa
              được bệnh nhân đến bệnh viện.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>Nếu người bệnh tỉnh:</span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              - Đặt bệnh nhân ở tư thế đầu nằm nghiêng, đầu hơi nâng nhẹ.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              - Không cho bệnh nhân ăn hoặc uống bất cứ thứ gì.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              - Lau đờm dãi, bỏ các vật trong miệng có thể làm bệnh nhân khó thở
              như răng giả, thức ăn còn sót lại…
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              - Nếu bị liệt, khi vận chuyển, cần đặt bệnh nhân nằm nghiêng về
              bên người không bị liệt.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <a href="http://www.benhtimmach.org/cap-cuu-nguoi-bi-dot-quy.html">
                <img
                  alt="Kiểm tra mạch khi cấp người bị đột quỵ"
                  src="http://www.benhtimmach.org/pictures/kiem-tra-mach-khi-cap-cuu-nguoi-bi-dot-quy.jpg"
                  style={{ width: "100%" }}
                />
              </a>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <em>Kiểm tra mạch khi cấp người bị đột quỵ</em>
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Nếu người bệnh ở trạng thái lơ mơ:
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              - Kiểm tra mạch, nhịp thở. Quan trọng là phải đặt bệnh nhân ở tư
              thế nằm nghiêng về một bên không liệt và phải luôn để đầu ở tư thế
              nâng nhẹ.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>Nếu người bệnh bị hôn mê:</span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              - Cần sơ cứu theo những bước đã kể trên.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              - Nếu mạch của người bệnh không đập hoặc ngừng thở, phải ngay lập
              tức tiến hành hô hấp bằng cách thổi mồm và ép tim ngoài lồng ngực
              cho bệnh nhân theo tỉ lệ 1:5.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Những <strong>cấp cứu cho người bị đột quỵ</strong> hợp lý sẽ góp
              phần giảm nhẹ những hậu quả của đột quỵ, có thể cứu sống nạn nhân
              khỏi cái chết.
            </span>
          </p>
        </>
      ),
      videoUrl: "",
    },
    4: {
      title: "Sơ cứu xử lý đúng cách khi trẻ bị hóc dị vật",
      content: (
        <>
          <h2>
            <span style={{ fontSize: "16px" }}>
              Hướng dẫn sơ cứu xử lý đúng cách khi trẻ bị hóc dị vật đường thở
              các bậc cha mẹ cần phải biết.
            </span>
          </h2>

          <p>
            <span style={{ fontSize: "16px" }}>
              Khi phát hiện hay nghi ngờ trẻ bị dị vật đường thở, tùy từng
              trường hợp mà có cách xử trí hợp lý. Cần giữ bình tĩnh, tránh cố
              gắng móc dị vật ra khỏi miệng trẻ vì chưa chắc lấy ra được mà có
              khi đẩy vào sâu hơn. Bài viết sau{" "}
              <strong>
                hướng dẫn sơ cứu xử lý đúng cách khi trẻ bị hóc dị vật đường thở
              </strong>{" "}
              các bậc cha mẹ cần phải biết.
            </span>
          </p>

          <h2>
            <span style={{ fontSize: "16px" }}>
              Hóc – sặc là một trong những tai nạn cực kỳ nguy hiểm và thường
              xảy ra ở trẻ trong khi ăn.
            </span>
          </h2>

          <p>
            <span style={{ fontSize: "16px" }}>
              Hóc – sặc là những hiện tượng thường gặp ở trẻ. Đôi khi trong
              những trường hợp nặng, nếu cha mẹ không biết cách và không kịp xử
              lý trong vòng từ 5 đến 10 phút thì tính mạng trẻ có thể bị đe dọa.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Về nguyên nhân trẻ hóc – sặc thì chủ yếu là do trẻ còn nhỏ, cơ thể
              chưa hoàn thiện để có những phản xạ đóng nắp thanh quản khi nuốt
              dẫn tới thức ăn lạc xuống và chặn đường thở. Hóc dị vật đường thở
              nói chung là một trong những tai nạn cực kỳ nguy hiểm và thường
              xảy ra ở trẻ trong khi ăn, khi chơi. Sặc sữa, sặc cháo, sặc canh
              nói riêng là hiện tượng sữa, thực phẩm lỏng mềm trào vào đường thở
              khiến trẻ bị bịt đường thở, khó thở, sặc sụa, tím tái có thể gây
              tử vong.
            </span>
          </p>

          <h2>
            <span style={{ fontSize: "16px" }}>
              Nhận biết khi trẻ bị hóc – sặc
            </span>
          </h2>

          <p>
            <span style={{ fontSize: "16px" }}>
              Dấu hiệu cơ bản để các mẹ có thể nhanh chóng nhận ra con mình đang
              bị hóc – sặc là khi trẻ đang bú, đang ăn, thậm chí đang chơi đùa
              đột ngột bé ho dữ dội, da tái xanh, sặc sụa, tím tái, chân tay
              cứng đờ, không thể khóc, ú ớ. Trong trường hợp nặng thì có thể
              xuất hiện nước, sữa, canh… trào ra từ mũi, miệng của bé. Trường
              hợp nặng nhất, bé có thể xuất hiện những cơn ngừng thở và tử vong
              ngay lúc đó. Đối với trường hợp bị hóc – sặc nhẹ hơn thì trẻ có
              thể trở lại bình thường nhưng theo các chuyên gia y tế thì sau đó
              trẻ dễ bị viêm phế quản, tái phát nhiều lần. Bệnh sẽ dai dẳng, đôi
              khi phải soi khí phế quản vài lần để hút mủ và bột còn sót lại.
            </span>
          </p>

          <h2>
            <span style={{ fontSize: "16px" }}>
              Hướng dẫn những kỹ năng cơ bản sơ cứu khi bé bị hóc – sặc các mẹ
              cần phải biết
            </span>
          </h2>

          <p>
            <span style={{ fontSize: "16px" }}>
              Trả lời về vấn đề này, Tiến sĩ, Bác sĩ Nguyễn Tiến Dũng, Trưởng
              khoa Nhi – bệnh viện Bạch Mai cho biết, việc sơ cứu trẻ hóc dị vật
              vô cùng quan trọng, nếu xử lý đúng cách và kịp thời sẽ cứu được bé
              trong gang tấc. Nếu không kịp thời chỉ sau 5-6 phút, dị vật chèn
              đường thở sẽ khiến bé ngừng thở, suy hô hấp dẫn tới tử vong.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Khi thấy trẻ có dấu hiệu sặc sữa, sặc cháo, hay hóc dị vật (thực
              phẩm cứng, đồ vật nhỏ…), cha mẹ hoặc người giữ trẻ cần bình tĩnh
              và xử lý thật nhanh những thao tác như sau:
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Một tay giữ bé, một tay dùng lòng bàn tay vỗ thật mạnh 5 – 7 cái
              vào lưng bé – chỗ giữa hai xương bả vai, hành động này sẽ khiến áp
              lực trong lồng ngực trẻ tăng lên để tống đẩy dị vật ra ngoài.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Sau khi làm xong nếu trẻ vẫn khó thở, tím tái, cha mẹ cần đặt bé
              nằm ngửa, dùng hai ngón trỏ ấn nhanh, mạnh, đột ngột vào xương ức.
            </span>
          </p>
        </>
      ),
      videoUrl: "",
    },
    5: {
      title: "Sơ cứu khi bị kiến ba khoang đốt",
      content: (
        <>
          <p>
            <span style={{ fontSize: "16px" }}>
              Hiện nay, dịch kiến ba khoang tấn công người lại đang có dấu hiệu
              bùng phát trở lại. Khi bị côn trùng đốt, nhất là với kiến ba
              khoang, cần nhanh chóng tiến hành xử lý vết đốt để tránh da bị tổn
              thương nặng. Loài này xuất hiện vào đầu mùa mưa khi có ẩm độ cao,
              nhất là sau các đám mưa lớn đầu mùa. Chúng thường sống trong ruộng
              lúa, ăn rầy nâu và rất thích ánh sáng đèn nên thường vào đèn chung
              với rầy nâu ở những nơi có nhiều ruộng lúa bao quanh. Vết đốt của
              kiến ba khoang thường để lại những vết đỏ lấm tấm mụn nước. Các
              mụn nước này có thể chỉ hơi ngứa cũng có thể gây tổn thương phỏng
              mủ trên khắp cơ thể.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Chất độc của kiến ba khoang khi tiếp xúc với da tạo nên bỏng da,
              viêm da, gây bỏng rát như bị tạt axit. Nhiều người không biết dùng
              tay diệt kiến xong vô tình dùng tay đó tiếp xúc với vùng da khác
              khiến cho những chỗ này không bị kiến đốt vẫn tổn thương. Vì vậy
              cách xử lý đúng khi bị kiến ba khoang đốt sẽ giúp nạn nhân dễ chịu
              hơn rất nhiều.
            </span>
          </p>

          <h3>
            <span style={{ fontSize: "16px" }}>Nhận biết kiến ba khoang</span>
          </h3>

          <p>
            <span style={{ fontSize: "16px" }}>
              Kiến ba khoang có thân thon dài, hai màu đỏ và đen tạo thành các
              khoang đen – vàng cam xen kẽ. Chúng thường sống ở các ruộng lúa,
              vườn cây, cỏ mục, bãi rác thải, công trình đang xây dựng… Kiến ba
              khoang xuất hiện nhiều vào đầu mùa mưa và rất thích ánh sáng đèn
              ban đêm.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <img
                alt="Kiến ba khoang"
                style={{ height: "333px", width: "500px" }}
              />
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>Kiến ba khoang</span>
          </p>

          <h3>
            <span style={{ fontSize: "16px" }}>
              Cách xử lý đúng khi bị kiến ba khoang đốt
            </span>
          </h3>

          <p>
            <span style={{ fontSize: "16px" }}>
              Trong dịch cơ thể của kiến ba khoang có chứa pederin, một loại
              chất độc gây rộp, phỏng da, viêm da. Một số người khi bị kiến ba
              khoang đốt chỉ nổi những vết mụn nước nhỏ, hơi ngứa, không thành
              phỏng nước, phỏng mủ. Trong khi một số khác, vết đốt lại phỏng mủ
              lan rộng khiến người bệnh sưng đau, sốt, bạch cầu tăng cao…
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <img
                alt="Vết đốt của kiến ba khoang"
                src="http://ehospital.vn/wp-content/uploads/2016/04/cach-xu-ly-dung-khi-bi-kien-ba-khoang-dot-2.jpg"
                style={{ height: "452px", width: "500px" }}
              />
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>Vết đốt của kiến ba khoang</span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Để xử lý đúng khi bị kiến ba khoang đốt, bạn cần chú ý:
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              – Khi thấy kiến đậu vào da thì không nên đập hoặc giết chúng mà
              hãy thổi chúng đi, tránh cho pederin lây rộng ra các vùng da khác.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              – Dùng nước muối sinh lý trung hòa chất độc của kiến (ngày 3-4
              lần) ngay khi có dấu hiệu nổi mụn nước nhỏ. Sau đó bôi các thuốc
              làm dịu da như hồ tetra-pred. Đối với trẻ em thì tốt nhất là cho
              ngay chỗ bị đốt vào dưới vòi nước chảy để loại bỏ bớt nọc độc rồi
              bôi thuốc làm dịu da. Khi các mụn nước khô thì bôi kem kháng sinh
              hoặc corticoid.
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              <img
                alt="Rửa tay dưới vòi nước để loại bỏ bớt độc"
                src="http://ehospital.vn/wp-content/uploads/2016/04/cach-xu-ly-dung-khi-bi-kien-ba-khoang-dot-3.jpg"
                style={{ height: "500px", width: "500px" }}
              />
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              Rửa tay dưới vòi nước để loại bỏ bớt độc
            </span>
          </p>

          <p>
            <span style={{ fontSize: "16px" }}>
              – Nếu da bị phồng rộp, sưng tấy thì rửa vết thương bằng thuốc tím
              rồi bôi các loại thuốc như Korcin; Betnovate; Betnovate-GM;
              Gentrisone…
            </span>
          </p>
        </>
      ),
      videoUrl: "",
    },
  };
  // lay du lieu dua vao sosId
  const capCuuDetail = capCuuData[sosId];

  return (
    <>
      <Header />
      <div className="home">
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    <Link to="/sos">Cấp cứu</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Chi tiết cấp cứu
                  </li>
                </ol>

                {capCuuDetail ? (
                  <div className="capcuu-detail">
                    <div className="content-bg-w">
                      <div className="caption">
                        <h1>{capCuuDetail.title}</h1>
                        <div>{capCuuDetail.content}</div>
                        <div className="video-container">
                          <iframe
                            width="560"
                            height="315"
                            src={capCuuDetail.videoUrl}
                            title="Video hướng dẫn"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Không tìm thấy chi tiết cấp cứu.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ChiTietCapCuu;
