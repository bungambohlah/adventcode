const input = `rgffbnnqvqhhmtmzzmmpmllcggsdswwvvwzzpptbppgngsnncwcnwcwnwgwrwrrnqnlqlccwggrcgrccjgcgwghgffjgjgrgmmsrrhchfcfdccjwwzdzcdcbcjjtfjjltlvvtstvttszsvsmmfccwcjwwzmzhhjvjpvjpppcwppdtdvtdvtvztzvzffdfqqgbgffrgrpgphhbcctssncsnncfcppvnpvnvfnfvnnfggtpplggwsggldllzvzrznncbbjpplbbrrnsrssmrsrhhmqmnqqhpqqnrqnrrtrnnrwrwhhpjhphlhvvgbgzztqtvvmssdshhqnhnjjvhjhqqbrqrrmrlrdllvrlvlccfvcffhfssgvsswhwqqfwfwhhcffjmmjrrbgrgjgrrvsrvvwmwsmmszzvmzvmmwmtthvvfbfllpjpwpwjpwpnpjpqqwtqtwwqpwqqrsqqcpqqssrgsrrjwwqmwmgwgrggmvmgmfgmffjfhjfjttcztccmtmmccnznhhcgcffmnfmmqjjhwwtccbzbhhwnhnsnmsnmnqqchhhnggbzbjzjzszsfsjfjvffnlffvrvddbhhqccdnnzwnznjnpnmppthhqddjhddqjqlqplqqjpjwppqttswsvwvfwflfplffnbfbwfwhhlhtlhtltzzmlmslmlwwgzwzrrwhhlnnrfnnmpppjpgpbbhpbhppbrppbhhzgzczqcqvqggwppcnnhnznvznzhhcpctptpjtppdhhprhrcrpcprpplrprzrnrfnrnlrlvrrfqqnnsqsqrssnrnvvvghvvbzzqppjsjnnrprwrrmqqtfqfwwrdrsddprddbdzbdbndbdjdljjrtjrrnzrzjrzzpssftfmfbflbbcpcsppwrppntnhthlthtbbsmsbmsmggpssnhnjjtsjjwssdjdwwppcbpcclmccwzzrggmgmnnwjnnqppjttvllmhhvcctptbpbdpdhdqqgggbnnqcchlhssltstllvqlvqvdvjdvvqvsvfvhfhlfftqffztzdttfvvzmvzznvnsnjjvqjvjljplpvvzlzhzghgddbbzbmbnztgthrnpsqhhdvprtpdftmqfvgjzgdvqwmvgwbczvbschqfhdvqcfnmbgmtqmlmsqcbfhshrzzbrtpgnwwtzgnjghzrlwhntprqhvshjcfvlnchccbtnswfnmpccdppqrqrhngvlwrpplbnpgzbzwtzwrsptmsmlndcfmbnqgvnqvzwpvrtfsrwfvfwdvplrfdddwcnwhzchmwfjsfvbtbrjchmgqwfvvmpzhqcbzhrcmjrzmgrtnzrcqdqdqnpwjctlhrjcphbbcvhvqnhtwjrvrbzfzfzzplshvrcchvtgtjcnhlzsttwdhcmdvrdlgsngvtzqsjrcptwwbgvfbsvgnmfhmvgqtfzbhhmdznjlsghhnlwzhvplfvlqzbrsjhdvrshjbnfqgpscbpzmnmmcsdbtwbwmsvfjwdvtctslcqfssrhczdptlrjbfzjctqrcbppcfcbqqzhhftdjchtscwgwcnpvrrjvnnwrqtrqmbgdfcpqhddnvdnmlmqcgsndwbcfvfrzsrflsnqrpmszqrdlshlcsfrmnsqmtrvjwqcllftscwrtmvcjsmrlqvdfjzgfdtswqzldqgjvhczpqrfbclnbwcjprjncvhgfmjhgfgnvfzfnvbbstgsgtspdhtfsncttlwmllbbvqftjtshfjlqtjwlvrbwmzfhdmcbhtqdzqtzmdljqprwhqwcvbtfqbpjwztgqrvlrqdwmqrqzvptsgjdqnqdfwfpjdglwgpdrcfrrzmpjmtbwwrqqcsnmphcqtthlnlzlfftrjmtjwwqrldcfjjclzrsqvltsfchfggcwbzbtpqcjfvgpwnwwqrdbdvjplgsgctdhqvttmtpmmjfcqdslhjgtdppbmzbrfbrrjncfdhlmjgdwjrmbgpcgctghbvphpgfvvfvtplqrhnjjhqntjvbsggvrvjgrwptcgqgrmjtprvhnvjsdsfqrqrrltlhvfsjsqpbwndbsnjzplcfqtfbdqdzdvnljcsmjnrmwwjzqwsjbdlclsmccbqwnlpltqhqhmthhrdjwlqwrbltghsvblqntvjqzpmmpqwrrwvhmtfqzhrmjfglwfpthhgbhdmrtprtqgqbdcfqlbbvmzmchzglmpzdvhpqchhclbcvrcmhtzqfzrplbvmdhghsttzgdjbgmmtvlqjsstgwlwchhwmflwbgljgszghvfdsngbtbcnhzmmdmsjqfbcsmgpjwjqgwqdlrgznnmhphbrzcgnqczpcbljjmhnnrmzlpqbswwcjpjqcrtdmgprpmmbprwlmpzcmwlnbzqjsgftrncvmjmjwvqgszsrmrczhjnwlghgndhbthwlhfbncrwqfgnshrmdfhwmfvllhvbmmllwfbgrnrttpzffzvcfjfbrmdqfcfrdqsltpbbttnqnbncfhwghfbgwrltbhwmmlpczsvvdnwhchgfplnjsttsqvsznwvlwzgfnhfrrgplsfwrwnbfhblwtjpldjmzrglhppgsjsgzssbbgrrbdmpwhgjjmlfnpdbvtntcwrvltgfnrgwttvvjhqljjvvnmztwgzcclgbjnjspzwnpgtgvhhhqbzrnvmdcljcdncvpnpdhrhqwvlhllbsrmjbzlgczwjsrvqrqfqmtjrnpbtdhsrfbhrgtgnrmlgcwcmrvrdfcqbfcqczjchgrjpzqfqqmcpvnvbrssfrfsrjmlngplqqsnclgvpfhjbzdppjftlgbmcgdbrvqrclvtdnzhhcmzlrdrgbrqrlvfcnvznnqwswvhdpbbjmsqzcrmjngzmdftjzsjvgfdtcvdwhnwwjlcgcmflzzpzpgzrvmptbjgrdjbzscrglhcjppdjdshnvvbsnnddtbwsdrpnbnlrtppcrzbbjrfzhbwgmjqtmgjvmrjgfdndlmqvhgwprsjnhcmrnfdfdzggjjzcccnsnwwbjzmsfjjfhclptfcwqjhnphpwzszjmsrtnbqpqsvcfcvrrgclwlbrqngdcdlzrdfpvbgtznjzdvjngrgswhjnrpgswtqflpgvnpbsvcrtgtzcbhdjpbjwnpdzcmprtzlppbqvpzrrlbssmwhhvqqpmwggnzwcfdnzccjrrncnvjqgbpstctwpqvhdsbcsjrpbzbdlwwvjngtbnvpthppglgsnrbwnvpzldhsgwqhclgwrdsvcfdclvdsbrhcfnbgrtqswstnjfmfrdgphpvgjfqzcwnpcghdhtflgdnhhnnnwrpnmppszgqdcqjqpnccfsqjsmwtqvzwfqvtwtthwswmcqqcqjwcgwgzgmnpzbfpzrqbvqhbhtsvvbppbmqzfnsmwppzvsctgcncztsqdfhnlwjjtvwcchvnphwpnpzqsjhlrcmnbthtqlfclnsfdtpwfzljdpfszvhgzdpzhbjtphbfbmwgfrfplntfqhgpbjzghmblzzhdcbptngqwrtfmvtbhphpvdwpswbscrwzhnvqfwlbwwqqgstgmbqlllspbhbpjmmrfhmjwzdnsdwmpvlrspgzmdjwqwcjpbgwspsghjdvrbbsbtgwptqdvvdhbhqbdhpbzdsdwsjdbjnztdqqrdhwhtpvcbblbmjgmbpqghdsfthzjffrdvldfsnpcsmnzwzcqlnvcrcbqnfcdrfbffrvhqsbqjnnbzsqvqqdqwmsvbqvtgmnnlthpngfsljqnrdhhzpmwsnqvrgdnvlbgnndfcpjfgmzqssvnnrwbmslcqpnhnnwzggsjvqcsqpfzjcmcppntmsdtfggzdncqbfjsqvbzgnnlsdbgjqffsmvnbqlsrjwdmcjbrsrpchnnhdtlcdhfdltmlvtrwjpzphtbhzzrlrwbbhhpntgbcfmphnbrjdhrhvmvhfglrncngjdsvbfrqtqzsgvlzjqzcqnwdcfgvnpsqpphwfsdvpgnchjnnjhsqgvlqcvhzzzcrsqcvrbsbjbdbgddlbb`;

let temp = "";
const array = input.split("");

// PART 1
// const charMax = 4;
// PART 2
const charMax = 14;

for (let index = 0; index < array.length; index++) {
  const char = array[index];

  temp += char;
  if (temp.length >= charMax) {
    const lastChar = temp.slice(-charMax);
    if (new Set(lastChar).size === lastChar.length) break;
  }
}

console.log("len", temp.length);