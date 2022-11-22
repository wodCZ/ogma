import { ExecutionContext } from '@nestjs/common';
import { Parser, RpcInterceptorService } from '@ogma/nestjs-module';

@Parser('rpc')
export class GrpcParser extends RpcInterceptorService {
  getCallPoint(context: ExecutionContext) {
    return super.getCallPoint(context).rpc;
  }

  getCallerIp(context: ExecutionContext) {
    const data = this.getData<{ ip?: string }>(context);
    return data?.ip || '';
  }

  getProtocol() {
    return 'grpc';
  }

  getMethod() {
    return 'gRPC';
  }

  setRequestId(context: ExecutionContext, requestId: string): void {
    const grpcContext = this.getClient<{ requestId: string }>(context);
    grpcContext.requestId = requestId;
  }
}
