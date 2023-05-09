import { YAMLValidation } from "yaml-language-server/lib/umd/languageservice/services/yamlValidation";
import { YAMLSchemaService } from "yaml-language-server/lib/umd/languageservice/services/yamlSchemaService";
// The following line is for 1.12.0. Uncomment if using 1.7.0
import { Telemetry } from "yaml-language-server/lib/umd/languageservice/telemetry";
// The following line is for 1.7.0. Uncomment if using 1.12.0
// import { Telemetry } from "yaml-language-server/lib/umd/languageserver/telemetry";

// A telemetry class that does nothing, used to initialize YAMLValidation below.
class DummyTelemetry {
  send(): void {
    return;
  }
  sendError(): void {
    return;
  }
  sendTrack(): void {
    return;
  }
}

export class YAMLDiagnostics {
  private validator: YAMLValidation;

  constructor(private readonly schema: string) {
    const schemaService = new YAMLSchemaService(async () => {
      return this.schema;
    });
    this.validator = new YAMLValidation(
      schemaService,
      new DummyTelemetry() as unknown as Telemetry
    );
  }
}
/*
const schemaString = fse.readFileSync("/home/wyf/TeamsFx/packages/fx-core/resource/yaml.schema.json", "utf8");
const yamlDiagnostic = new YAMLDiagnostics(schemaString);
async function main() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

	rl.on('line', async (line) => {
    const path = "/home/wyf/TeamsApps/wyftab6/teamsapp.yml";
    const yamlString = await fse.readFile(path, "utf8");
		const diagnostics = await yamlDiagnostic.doValidation("/home/wyf/umd-test/1teamsapp.yml", yamlString)
		console.log(diagnostics);
		console.log("\n");
	});

	rl.once('close', () => {
     // end of input
  });
}

main()
*/